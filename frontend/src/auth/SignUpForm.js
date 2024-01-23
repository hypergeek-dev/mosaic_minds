import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        role_at_meeting: '',
        comment: ''
    });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userData = {
                username: formData.username,
                password: formData.password,
                profile: {
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    phone_number: formData.phone_number,
                    email: formData.email,
                    role_at_meeting: formData.role_at_meeting,
                    comment: formData.comment
                }
            };

            const response = await axios.post('/profiles/signup/', userData);
            console.log(response.data);
            setShowModal(true);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="container mt-4">
                {/* Username */}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>

                {/* Password */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                {/* First Name */}
                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        name="first_name"

                        value={formData.first_name}
                        onChange={handleChange}
                    />
                </div>

                {/* Last Name */}
                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                    />
                </div>

                {/* Phone Number */}
                <div className="form-group">
                    <label htmlFor="phone_number">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone_number"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                    />
                </div>

                {/* Email */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                {/* Role at Meeting */}
                <div className="form-group">
                    <label htmlFor="role_at_meeting">Role at Meeting</label>
                    <input
                        type="text"
                        className="form-control"
                        id="role_at_meeting"
                        name="role_at_meeting"
                        value={formData.role_at_meeting}
                        onChange={handleChange}
                    />
                </div>

                {/* Comment */}
                <div className="form-group">
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        className="form-control"
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>

            {/* Modal for Success Message */}
            <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Registration Successful</h5>
                        </div>
                        <div className="modal-body">
                            <p>Thank you for your registration!<br />
                                You can now add and edit meetings. Be aware, changes need to be approved before they become public.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>OK</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SignupForm;