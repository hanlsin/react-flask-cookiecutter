import React from "react";

import styled, { createGlobalStyle } from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ReactComponent as Logo } from "./logo.svg";

const WelcomeContainer = styled(Container)`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding-top: 16px;
  padding-bottom: 16px;

  text-align: center;
`;

const ColorPage = createGlobalStyle`
  body {
    background: #F7F7F7;
  }
`;

const PaddedRow = styled(Row)`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export default function Welcome() {
  return (
    <WelcomeContainer>
      <ColorPage />
      <PaddedRow>
        <Col>
          <Logo />
        </Col>
      </PaddedRow>
    </WelcomeContainer>
  );
}
