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
    this.fetchPrices();
  };

  fetchCoins = async () => {
    const coinList = (await cc.coinList()).Data;
    this.setState({ coinList }); // { coinList: coinList }
  };

  fetchPrices = async () => {
    if(this.state.firstVisit) return;
    let prices = await this.prices();
    // console.log(prices)
    prices = prices.filter(price => Object.keys(price).length);
    this.setState({prices});
  };

  prices = async () => {
    let returnData = [];
    for (let i = 0; i < this.state.favorites.length; i++) {
      try {
        let priceData = await cc.priceFull(this.state.favorites[i], "USD");
        returnData.push(priceData);
      } catch (e) {
        console.warn("Fetch price error: ", e)
      }
    }
    return returnData
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
    }, () => {
      this.fetchPrices();
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
