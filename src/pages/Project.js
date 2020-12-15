import React from "react";
import { Container } from "react-bootstrap";

import { Row, Col} from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";

import p1 from "./images/a.jpg";
import p2 from "./images/b.jpg";

export default function Project() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        
        <Row className="#">
        <Col md={2}>
            
            </Col>
          <Col md={8}>
            <h2 className="resume">LATEST PROJECTS</h2>
            <div>
              <hr />
              <Row>
              <Col md={8} >
              <img  src={p1} alt="project 1" />
              </Col>

                <Col  md={4}>


                <Row>
              <div md={4} className="res" >
                <p className="text2 center2">PROJECT | 01</p>
              </div>
              
                <div>
                <hr />
                <p>
                Project | 01 title
                <br /> <br />

                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me and you can
                start adding your own content and make changes to the font. Feel
                free to drag and drop me anywhere you like on your page. I’m a
                great place for you to write more. Tell a story about yourself.
                </p>
                
              </div>
                </Row>
                
                </Col>

              </Row>       
             
            </div>

            <div>
              <hr />
              <Row>
              <Col md={8} >
              <img  src={p2} alt="project 2" />
              </Col>

                <Col  md={4}>


                <Row>
              <div md={4} className="res" >
                <p className="text2 center2">PROJECT | 02</p>
              </div>
              
                <div>
                <hr />
                <p>
                Project | 02 title
                <br /> <br />

                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me and you can
                start adding your own content and make changes to the font. Feel
                free to drag and drop me anywhere you like on your page. I’m a
                great place for you to write more. Tell a story about yourself.
                </p>
                
              </div>
                </Row>
                
                </Col>

              </Row>       
             
            </div>
          </Col>
          <Col md={2}>
            
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
