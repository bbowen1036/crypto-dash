import React from "react";
// Context
import { AppContext } from "../components/AppProvider";
import { SelectableTile, DisabledTile, DeleteableTile } from "../shared/Tile";
// Components
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../shared/CoinImage";

export default function CoinTile({ coinKey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];

        let TileClass = SelectableTile;
        if (topSection) TileClass = DeleteableTile;

        return (
          <TileClass>
            <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
