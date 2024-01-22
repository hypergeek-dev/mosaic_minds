import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import SignInForm from "../auth/SignInForm";
import jwtDecode from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const checkAuthentication = () => {
    const token = localStorage.getItem('mosaic.minds');
    if (!token) {
      return false;
    }
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('mosaic.minds');
        return false;
      }
      return true;
    } catch (error) {
      console.error('Error decoding token:', error);
      return false;
    }
  };


  useEffect(() => {
    setIsAuthenticated(checkAuthentication());
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('mosaic.minds');
    setIsAuthenticated(false);
  };

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
            <Nav.Link as={Link} to="/meeting-list">Meetings</Nav.Link>
            <Nav.Link as={Link} to="/volunteer">Volunteer</Nav.Link>
            {isAuthenticated && (
              <Nav.Link as={Link} to="/meetings/create">Add Meeting</Nav.Link>
            )}
          </Nav>
          <Nav className="ml-auto">
            {!isAuthenticated ? (
              <SignInForm />
            ) : (
              <Nav.Link onClick={handleLogout}>
                <FontAwesomeIcon icon={faDoorOpen} /> Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
