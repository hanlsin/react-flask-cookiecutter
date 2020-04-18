import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
/*
  React Bootstrap Components
  https://react-bootstrap.github.io/components/alerts/
*/
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import TitleH1 from "./text/TitleH1";
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

const GradientPage = createGlobalStyle`
  body {
    background: linear-gradient(180deg, rgba(74,168,158,1) 0%, rgba(148,189,153,1) 35%, rgba(251,226,139,1) 100%);
  }
`;

const PaddedRow = styled(Row)`
  padding-top: 32px;
  padding-bottom: 32px;
`;

const MainRow = styled(Row)`
  flex: 1;
`;

export default function Welcome() {
  return (
    <WelcomeContainer>
      <GradientPage />
      <PaddedRow>
        <Col>
          <TitleH1>Welcome to<br />ReactJS & Flask Cookie Cutter</TitleH1>
        </Col>
      </PaddedRow>
      <PaddedRow>
        <Col>
          <Logo />
        </Col>
      </PaddedRow>
      <MainRow>
        <Col>
          <Link to="/home">
            <Button
              variant="primary"
              size="lg"
              block
            >
              Go to Home
            </Button>
          </Link>
        </Col>
      </MainRow>
    </WelcomeContainer>
  );
}
