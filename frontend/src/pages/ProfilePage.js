import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileDetails from '../components/ProfileDetails';
import ProfileEdit from '../components/ProfileEditForm';
import UserNameForm from '../components/UserNameForm';
import UserPasswordForm from '../components/UserPasswordForm';

const ProfilePage = () => {
    const [editMode, setEditMode] = useState(false);

    return (
        <Container>
            <Row>
                {/* First Column */}
                <Col md={6}>
                    {editMode ? <ProfileEdit /> : <ProfileDetails />}
                    <button onClick={() => setEditMode(!editMode)}>
                        {editMode ? 'View Details' : 'Edit Profile'}
                    </button>
                </Col>

                {/* Second Column */}
                <Col md={6}>
                    {/* Row for UserName */}
                    <Row>
                        <UserNameForm />
                    </Row>

                    {/* Row for Password */}
                    <Row>
                        <UserPasswordForm />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;
