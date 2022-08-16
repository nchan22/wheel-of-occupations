import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css";
import { Container } from "react-dom";

function SpinningWheel() {
  return (
    <Container>
      <Button id="spin">Spin</Button>
    </Container>
  );
}

export default SpinningWheel;
