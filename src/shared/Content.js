import React from 'react';
import {AppContext} from "../components/AppProvider";

export default function Content(props) {
  return (
    <AppContext.Consumer>
      {({ coinList })=> {
        if (!coinList) {
          return <div> Loading Coins </div>
        } else {
         return <div> {props.children} </div>
        }
      }}
    </AppContext.Consumer>
  )
}
