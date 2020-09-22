import React from "react";
import { Container } from "react-bootstrap";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Resume() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <p>Resume</p>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
