import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.size.H1};
  font-weight: ${props => props.theme.font.weight.H1};
`;

export const TitleH1 = props => {
  return (
    <div style={props.style}>
      <StyledH1>{props.children}</StyledH1>
    </div>
  );
};

export default TitleH1;
