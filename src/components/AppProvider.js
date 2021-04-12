// React
import React from "react";
// CryptoCompare
import cc from "cryptocompare";

import keysConfig from "../config/keys";


cc.setApiKey(keysConfig.cryptoAPI);

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
  };

  fetchCoins = async () => {
    const coinList = (await cc.coinList()).Data;
    this.setState({ coinList })   // { coinList: coinList }
  };

  setPage = (page) => {
    this.setState({ page: page });
  };

  savedSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) {
      return { page: "settings", firstVisit: true };
    }
    return {};
  };

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: "dashboard",
    });
    localStorage.setItem("cryptoDash", JSON.stringify({ test: "hello" }));
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
