import React, { useState } from 'react';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';

const VolunteerForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        motivation: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Container className="my-4">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
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
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default VolunteerForm;
