// React
import React from "react";
// Components
import WelcomeMessage from "./WelcomeMessage";
import ConfirmButton from "./ConfirmButton";
import Page from "../shared/Page";

export default () => {
  return (
    <div>
      <Page name="settings">
        <WelcomeMessage />
        <ConfirmButton />
      </Page>
    </div>
  );
};