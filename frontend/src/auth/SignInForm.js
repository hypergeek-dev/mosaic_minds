import React, { useState } from "react";
import axios from "axios";
import { useSetCurrentUser } from "./AuthContext";
import { useRedirect } from "../api/UseRedirect";
import { setTokenTimestamp } from "../api/utils";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useHistory, Link } from "react-router-dom"; // Import Link

function SignInForm() {
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.goBack();
    } catch (err) {
      console.log("Error Object:", err); 
      console.log("Error Response Data:", err.response?.data); 
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container className="p-4">
      <h1>Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
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
        </Row>
        {errors.username?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Row className="mb-3">
          <Form.Label column sm={3} className="d-none">Password</Form.Label>
          <Col sm={9}>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Col>
        </Row>
        {errors.password?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
        <Button type="submit">Sign in</Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert key={idx} variant="warning" className="mt-3">
            {message}
          </Alert>
        ))}
      </Form>
   
      <Container className="mt-3">
        <Link to="/signup">Don't have an account? <span>Sign up now!</span></Link>
      </Container>
    </Container>
  );
}

export default SignInForm;
