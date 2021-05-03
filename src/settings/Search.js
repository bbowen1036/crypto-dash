import React from "react";
import styled from "styled-components";

import { backgroundColor2, fontSize2 } from "../shared/Styles";
import { AppContext } from "../components/AppProvider";
import _ from "lodash";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  border: 1px solid;
  height: 25px;
  color: #1163c9;
  outline: none;
  place-self: center left;
`;

// Lodash built in debounce function to prevent running too many event queries at once
const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  // Get all coin symbols
  let coinSymbols = Object.keys(coinList);
  // Get 
}, 500)

function filterCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value;
  handleFilter(inputValue, coinList, setFilteredCoins)
}

export default function Search() {
  return (
    <AppContext.Consumer>
      {({setFilteredCoins, coinList}) => 
      <SearchGrid>
        <h2>Search all coins</h2>
        <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList) } />
      </SearchGrid>
      }
    </AppContext.Consumer>
  );
}
