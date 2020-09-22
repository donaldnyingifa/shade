import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <React.Fragment className="header">
      <Navbar id="navbar" expand="lg">
        <Link to="/">
          <h1>
            FOLASHADE <br />
            SHAKIRA
          </h1>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link to="/"> HOME</Link>
            <Link to="/resume"> RESUME</Link>
            <Link to="/project"> PROJECTS</Link>
            <Link to="/contact"> CONTACT</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
