// React
import React from "react";
// React Context
import { AppProvider } from "./AppProvider";
// Styles
import "./App.css";
import styled, { css } from "styled-components";
// Components
import AppLayout from "./AppLayout";
import Settings from "../settings";
import AppBar from "./AppBar";
import Content from "../shared/Content";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Content>
          <Settings />
        </Content>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
