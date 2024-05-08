import React, { useState } from 'react';
import { Form, Button, Container, Card, Row, Col, Alert } from 'react-bootstrap'; 
import axios from 'axios';

const VolunteerForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        motivation: ''
    });

    const [submitResponse, setSubmitResponse] = useState({
        message: '',
        variant: 'success' 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();s
        if (!formData.name || !formData.email || !formData.motivation) {
            setSubmitResponse({
                message: 'Please fill out all fields.',
                variant: 'danger'
            });
            return;
        }
        try {
            const response = await axios.post('/volunteer/', formData);
            console.log(response.data);
            setSubmitResponse({
                message: 'Application submitted successfully!',
                variant: 'success'
            });
            setFormData({
                name: '',
                email: '',
                motivation: ''
            });
        } catch (error) {
            console.error('There was an error submitting the form:', error);
            setSubmitResponse({
                message: 'Failed to submit application. Please try again.',
                variant: 'danger'
            });
        }
    };    

    return (
        <Container className="my-4 form-container-custom">
            <Row className="justify-content-center">
                <Col md={8} lg={12}>
                    <Card>
                        <Card.Header as="h3" className="text-center">Volunteer Application</Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit} aria-label="Volunteer Application Form">

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="name">Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        aria-label="Name"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="email">Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        aria-label="Email Address"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="motivation">Motivation</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="motivation"
                                        id="motivation"
                                        value={formData.motivation}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="Why do you want to volunteer?"
                                        aria-label="Motivation"
                                    />
                                </Form.Group>

                                <div className="text-center">
                                    <Button variant="primary" type="submit" aria-label="Submit Button">Submit</Button>
                                </div>
                            </Form>
                            {submitResponse.message && (
                                <Alert variant={submitResponse.variant}>{submitResponse.message}</Alert>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default VolunteerForm;
