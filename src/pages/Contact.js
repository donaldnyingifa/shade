import React from "react";
import { Container } from "react-bootstrap";

import Header from "../components/header";
import Footer from "../components/footer";

import { Row, Col, Form, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./contact.css";

export default function Contact() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        {/* body */}
        <Row className="#">
          <Col md={6}>
            <h2 className="contact">CONTACT</h2>
            <div>
              <FontAwesomeIcon className="icon" icon={faInstagram} />
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </div>

            <p className="contactText">
              <strong>Email</strong> info@shade.com
            </p>
          </Col>
          <Col md={6}>
            <p>Look forward to hearing from you!</p>

            <Form className="form">
              <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="Phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
