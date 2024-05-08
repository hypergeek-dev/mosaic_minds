import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useRedirect } from "../api/UseRedirect";
import { useSetCurrentUser } from "./AuthContext";
import { setTokenTimestamp } from "../api/utils";

const SignUpForm = () => {
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});
  const history = useHistory(); // Include history here

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/registration/", signUpData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className="my-auto py-2 p-md-2">
      <Col md={6} className="mx-auto"> {/* Centering the content */}
        <Container className="p-4 text-center"> {/* Centering the content */}
          <h1>Sign Up</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="username" className="justify-content-center">
              <Form.Label column sm={3} className="d-none">Username</Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group as={Row} controlId="password1" className="justify-content-center">
              <Form.Label column sm={3} className="d-none">Password</Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password1"
                  value={password1}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Form.Group as={Row} controlId="password2" className="justify-content-center">
              <Form.Label column sm={3} className="d-none">Confirm password</Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  name="password2"
                  value={password2}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button type="submit">Sign Up</Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
          <Container className="mt-3">
            <Link to="/signin">Already have an account? Sign in</Link>
          </Container>
        </Container>
      </Col>
      <Col md={6} className="my-auto d-none d-md-block p-2">
        
      </Col>
    </Row>
  );
};

export default SignUpForm;
