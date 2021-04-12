// React
import React from "react";
// Context
import { AppContext } from "../components/AppProvider";

export default function WelcomeMessage(props) {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            <h1>Welcome to Crypto Dash </h1>
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
}
