import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../components/AppProvider";
// StyleComponent
import { Tile, SelectableTile } from "../shared/Tile";



const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

export default function () {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        return (
          <CoinGridStyled>
            {Object.keys(coinList).map((coinKey) => (
              <SelectableTile>{coinKey}</SelectableTile>
            ))}
          </CoinGridStyled>
        );
      }}
    </AppContext.Consumer>
  );
}
