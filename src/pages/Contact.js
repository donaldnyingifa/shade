import React from "react";
import { Container } from "react-bootstrap";

import Header from "../components/header";
import Footer from "../components/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <p>Contact</p>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
      </Container>
      <Footer />
    </React.Fragment>
  );
}
