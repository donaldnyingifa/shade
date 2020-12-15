import React from "react";
import { Container } from "react-bootstrap";

import Header from "../components/header";
import Footer from "../components/footer";

import { Row, Col} from "react-bootstrap";
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
              <Row>
              <Col md={4} className="res" >
                <p className="text2 center2">PROFESSIONAL INFO</p>
              </Col>

                <Col  md={8}>
                <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me and you can
                start adding your own content and make changes to the font. Feel
                free to drag and drop me anywhere you like on your page. I’m a
                great place for you to write more. Tell a story about yourself.
              </p>
                </Col>

                <Col md={4} className="res" >
                <p className="text2 center2">WORK EXPERIENCE</p>
              </Col>

                <Col  md={8}>
                <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me and you can
                start adding your own content and make changes to the font. Feel
                free to drag and drop me anywhere you like on your page. I’m a
                great place for you to write more. Tell a story about yourself.
              </p>
                </Col>
                <hr />
                <Col md={4} className="res" >
                <p className="text2 center2">EDUCATION</p>
              </Col>

                <Col  md={8}>
                <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me and you can
                start adding your own content and make changes to the font. Feel
                free to drag and drop me anywhere you like on your page. I’m a
                great place for you to write more. Tell a story about yourself.
              </p>
                </Col>

              </Row>
              
             
            </div>
          </Col>
          <Col md={6}>
            <div className="skill">
              <h3>Skills</h3>
              <hr />
              <p>PHOTOSHOP</p>
              <p>FLASH</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
