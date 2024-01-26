import React from "react";
import { useCurrentUser, useSetCurrentUser } from "../auth/AuthContext";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import SignInForm from "../auth/SignInForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faCog } from '@fortawesome/free-solid-svg-icons';
import { removeTokenTimestamp } from "../api/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Navbar expand="md" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
            <Nav.Link as={Link} to="/meeting-list">Meetings</Nav.Link>
            <Nav.Link as={Link} to="/volunteer">Volunteer</Nav.Link>
            {currentUser && (
              <Nav.Link as={Link} to="/meetings/create">Add Meeting</Nav.Link>
            )}
          </Nav>
          <Nav className="ml-auto">
            {!currentUser ? (
              <SignInForm />
            ) : (
              <>
                <Nav.Link as={Link} to={currentUser.is_superuser ? "/admin/" : `/profiles/${currentUser.id}`}>
                  <FontAwesomeIcon icon={faCog} /> Profile Settings
                </Nav.Link>
                <Nav.Link onClick={handleSignOut}>
                  <FontAwesomeIcon icon={faDoorOpen} /> Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
