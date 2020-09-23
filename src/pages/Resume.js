import React from "react";
import { Container } from "react-bootstrap";

import Header from "../components/header";
import Footer from "../components/footer";

import { Row, Col, Form, Button } from "react-bootstrap";
import "./resume.css";

export default function Resume() {
  return (
    <React.Fragment>
      <Container>
        <Header />

        <Row className="#">
          <Col md={6}>
            <h2 className="resume">Resume</h2>
            <div>
              <hr />
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me and you can
                start adding your own content and make changes to the font. Feel
                free to drag and drop me anywhere you like on your page. I’m a
                great place for you to write more. Tell a story about yourself.
              </p>
              <hr />

              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me and you can
                start adding your own content and make changes to the font. Feel
                free to drag and drop me anywhere you like on your page. I’m a
                great place for you to write more. Tell a story about yourself.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="skill">
              <h3>Skills</h3>
              <hr />
              <p>PHOTOSHOP</p>
              <p>FLASH</p>
              <p>HTLM</p>
              <p>CSS</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
