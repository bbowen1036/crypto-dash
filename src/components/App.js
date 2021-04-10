// React
import React from "react";
// Styles
import "./App.css";
import styled, { css } from "styled-components";
// Components
import AppLayout from "./AppLayout";
import WelcomeMessage from "./WelcomeMessage";


function App() {
  return (
    <AppLayout>
      <WelcomeMessage />
    </AppLayout>
  );
}

export default App;
