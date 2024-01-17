import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Form, Button, Alert,
} from 'react-bootstrap';
import axios from 'axios';
import { useSetCurrentUser } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function LogInForm() {
  const setCurrentUser = useSetCurrentUser();
  const navigate = useNavigate();

  const [logInData, setLogInData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = logInData;
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setLogInData({
      ...logInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/users/login/', logInData);
      if (data && data.access_token) {
        localStorage.setItem('mosaicminds', data.access_token); 
        navigate('/'); 
      }
    } catch (err) {
      if (err.response) {
        setErrors(err.response.data); 
      } else {
        setErrors({ non_field_errors: ["An unexpected error occurred."] });
      }
    }
  };

  return (
    <Container className={Container}>
      <Form onSubmit={handleSubmit}>
        <br />
        <br />
        <Form.Group controlId="username">
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={handleChange}
            aria-label="username"
          />
        </Form.Group>
        {errors.username?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="password">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={handleChange}
            aria-label="password"
          />
        </Form.Group>
        {errors.password?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Button variant="primary" type="submit" className={Button}>
          login
        </Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}
      </Form>

      <br />
      <div>
        <p>
          Don&apos;t have an account?
          <Link to="/signup" className={Link}>
            <strong> Sign up!</strong>
          </Link>
        </p>
      </div>
      <br />
    </Container>
  );
}

export default LogInForm;