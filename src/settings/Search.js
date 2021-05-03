import React from "react";
import styled from "styled-components";

import { backgroundColor2, fontSize2 } from "../shared/Styles";
import { AppContext } from "../components/AppProvider";
import _ from "lodash";
import fuzzy from "fuzzy";   // <<< library to do searching

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
  // Get all the coin names, map symbol to name
  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName)
  // Combine both lists into one list of things to search ** In case if user searches by sym or by full name **
  let allStringsToSearch = coinSymbols.concat(coinNames);

  // Library fuzzy will actually do the fuzzy searching  ... will return an array of objects => need to map to array
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(obj => obj.string)

  
  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.coinName;
    
    return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName))
  });

  setFilteredCoins(filteredCoins);
}, 500)

function filterCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value;
  if(!inputValue) {   // << fixes bug when user clears search field
    setFilteredCoins(null);  
    return
  }
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
