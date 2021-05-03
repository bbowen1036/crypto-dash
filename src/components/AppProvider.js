// React
import React from "react";
// Lodash
import _ from "lodash";
// CryptoCompare
import cc from "cryptocompare";

import keysConfig from "../config/keys";

cc.setApiKey(keysConfig.cryptoAPI);

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      favorites: ["BTC", "ETC", "XMR", "DOGE"],
      ...this.savedSettings(),
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      confirmFavorites: this.confirmFavorites,
      setFilteredCoins: this.setFilteredCoins,
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
  };

  fetchCoins = async () => {
    const coinList = (await cc.coinList()).Data;
    this.setState({ coinList }); // { coinList: coinList }
  };

  addCoin = (key) => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({ favorites });
    }
  };

  removeCoin = (key) => {
    let favorites = [...this.state.favorites];
    this.setState({ favorites: _.pull(favorites, key) }); // lodash PULL method
    // let newFavorites = favorites.filter(fav => fav != key);    // <<< Without Lodash
    // this.setState({favorites: newFavorites})
  };

  isInFavorites = (key) => {
    return _.includes(this.state.favorites, key);
  };

  setPage = (page) => {
    this.setState({ page: page });
  };

  savedSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) {
      return { page: "settings", firstVisit: true };
    }
    let { favorites } = cryptoDashData;
    return {favorites};
  };

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: "dashboard",
    });
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({ favorites: this.state.favorites })         // << stringifys favorites state
    );
  };

  setFilteredCoins = (filteredCoins) => {
      this.setState({filteredCoins})
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
