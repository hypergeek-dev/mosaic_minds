import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="md">
    <Container>
      <Navbar.Brand as={Link} to="/">

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-left">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/AboutUs">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/MeetingList">
            Meetings
          </Nav.Link>
          <Nav.Link as={Link} to="/Volunteer">
            Volunteer
          </Nav.Link>
          <Nav.Link as={Link} to="/signin">
            Sign in
          </Nav.Link>
          <Nav.Link as={Link} to="/SignUpForm">
            Sign up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
};


export default NavBar;