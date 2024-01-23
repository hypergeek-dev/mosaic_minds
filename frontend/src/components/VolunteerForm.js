import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

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
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Motivation</Form.Label>
                <Form.Control
                    as="textarea"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Why do you want to volunteer?"
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default VolunteerForm;
