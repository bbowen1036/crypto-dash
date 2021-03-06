// React
import React from "react";
import styled, { css } from "styled-components";
// Context
import { AppContext } from "./AppProvider";

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 40px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: #03ff03;
      text-shadow: 0px 0px 60px #03ff03;
    `}
`;

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const ControlButton = ({ name, active }) => {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (       // destructuring page, and setPage from the consumer
        <ControlButtonElem 
          active={page === name}
          onClick={() => (setPage(name))}
        >
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  );
};

export default function AppBar() {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div></div>
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
}
