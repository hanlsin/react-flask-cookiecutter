import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { ReactComponent as Logo } from "./logo.svg";

export default function Home() {
  return (
    <Container>
      <Link to="/welcome">
        <Button
          variant="primary"
          size="lg"
          block
        >
          Go to Welcome
        </Button>
      </Link>
      <Row>
        <Col>
          <Logo />
        </Col>
      </Row>
    </Container>
  );
}
