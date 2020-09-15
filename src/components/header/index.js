import React from "react";
import "./style.css";

import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <React.Fragment className="header">
      <Navbar id="navbar" expand="lg">
        <Navbar.Brand href="#home">
          <h1>
            FOLASHADE <br />
            SHAKIRA
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">RESUME</Nav.Link>
            <Nav.Link href="#home">PROJECTS</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
