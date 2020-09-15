import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";

export default function footer() {
  return (
    <Row className="footer">
      <Col md={4}>
        <h2>Contact</h2>
        <p>folashadeshakira@gmail.com</p>
      </Col>

      <Col md={4}>
        <h2>Follow me</h2>
      </Col>

      <Col md={4}>
        <h2>© 2020 by Folashade Shakira</h2>
        <p>Created by Donald Nyingifa</p>
      </Col>
    </Row>
  );
}
