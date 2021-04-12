// React
import React from 'react'
// Context
import {AppContext} from "../components/AppProvider";


export default function Page({name, children}) {
  return (
    <AppContext.Consumer>
      {({page}) => {
        if (page !== name) {
          return null;
        }
        return <div>{children}</div>
      }}
    </AppContext.Consumer>
  )
}
