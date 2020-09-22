import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function footer() {
  return (
    <Row className="footer">
      <Col md={4}>
        <h2>Contact</h2>
        <p>folashadeshakira@gmail.com</p>
      </Col>

      <Col className="social" md={4}>
        <h2>Follow me</h2>
        <a target="_blank" href="http://www.instagram.com/cakify.ng">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </a>
        <a target="_blank" href="http://www.twitter.com/cakify.ng">
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
      </Col>

      <Col md={4}>
        <h2>© 2020 by Folashade Shakira</h2>
        <p>Created by Donald Nyingifa</p>
      </Col>
    </Row>
  );
}
