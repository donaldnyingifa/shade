import React from "react";
import { Row, Col } from "react-bootstrap";
import shade from "./shade.png";
import "./style.css";

export default function body() {
  return (
    <Row className="body justify-content-md-center">
      <Col className="center" md={6}>
        <img className="img" src={shade} alt="shade__" />
      </Col>

      <Col md={6}>
        <h2 className="center">WELCOME TO MY SPACE</h2>

        <Row className="center resume">
          <Col className="a circle" md={4}>
            MY RESUME
          </Col>
          <Col className="b circle" md={4}>
            MY ARTICLES
          </Col>
          <Col className="c circle" md={4}>
            MY SKILLS
          </Col>
        </Row>

        <p>
          I am a Business student on most days. On this space i share my ideas
          and observations about life while trying to navigate the business
          world. I have lived many lives so to speak, and these experiences
          continuously shape me into my best authentic self. Stay a bit longer
          and learn more about me and my works. Feel free to contact me for work
          collaborations. xoxo
        </p>
      </Col>
    </Row>
  );
}
