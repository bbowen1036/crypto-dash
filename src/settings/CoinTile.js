import React from "react";
// Context
import { AppContext } from "../components/AppProvider";
import { SelectableTile } from "../shared/Tile";
// Components
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../shared/CoinImage";

export default function CoinTile({ coinKey }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];

        const TileClass = SelectableTile;
        return (
          <TileClass>
            <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
