import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Button, Row, Col, Container, Card, Alert } from "react-bootstrap";
import { axiosReq } from "../api/AxiosDefaults";
import { useCurrentUser, useSetCurrentUser } from "../auth/AuthContext";

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();

  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phonenumber: "",
    role_at_meeting: "",
  });

  const { first_name, last_name, email, phonenumber, role_at_meeting } = profileData;
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser && currentUser.id.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}`);
          setProfileData({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phonenumber: data.phonenumber,
            role_at_meeting: data.role_at_meeting,
          });
        } catch (err) {
          console.log(err);
          setErrors(err.response?.data);
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosReq.put(`/profiles/${id}/edit/`, profileData);
      setCurrentUser((prevCurrentUser) => ({
        ...prevCurrentUser,
        profile: data,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data || {});
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card>
            <Card.Header as="h3" className="text-center">Edit Profile</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit} className="px-4">

                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_name"
                    value={first_name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    value={last_name}
                    onChange={handleChange}
                  />
                </Form.Group>

    
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </Form.Group>


                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phonenumber"
                    value={phonenumber}
                    onChange={handleChange}
                  />
                </Form.Group>


                <Form.Group className="mb-3">
                  <Form.Label>Role at Meeting</Form.Label>
                  <Form.Control
                    type="text"
                    name="role_at_meeting"
                    value={role_at_meeting}
                    onChange={handleChange}
                  />
                </Form.Group>

                {Object.keys(errors).length > 0 && (
                  <Alert variant="danger">
                    {Object.keys(errors).map((key, index) => (
                      <p key={index} className="mb-0">{`${key}: ${errors[key]}`}</p>
                    ))}
                  </Alert>
                )}

          
                <div className="text-center mt-4">
                  <Button variant="primary" type="submit" className="me-2 button-spacing">Save Changes</Button>
                  <Button variant="secondary" onClick={() => history.goBack()}>Cancel</Button>

      
                  <Button variant="info" onClick={() => history.push('/edit/username')} className="me-2 button-spacing">Edit Username</Button>
                  <Button variant="warning" onClick={() => history.push('/edit/password')}>Change Password</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileEditForm;
