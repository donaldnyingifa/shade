import React from "react";
import "./home.css";
import { Container } from "react-bootstrap";

import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Body />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
