// React
import React from "react";
import styled from "styled-components";
// Context 
import {AppContext} from "../components/AppProvider";
// Styles
import { greenBoxShadow, fontSize1, color3 } from "../shared/Styles";


const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1};
  padding: 5px;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
`
const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        <CenterDiv>
          <ConfirmButtonStyled onClick={confirmFavorites}>
            Confirm Favorites
          </ConfirmButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
};  