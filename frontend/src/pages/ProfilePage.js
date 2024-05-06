import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileDetails from '../components/ProfileDetails';
import ProfileEditForm from '../components/ProfileEditForm';
import FavoritesList from '../components/FavoritesList';

const ProfilePage = () => {
    const [editMode, setEditMode] = useState(false);

    return (
        <Container fluid> 
            <Row className="mt-4"> 
                <Col xs={12}> 
                    {editMode ? (
                        <ProfileEditForm onCancel={() => setEditMode(false)} />
                    ) : (
                  
                        <ProfileDetails />
                    )}

                </Col>
            </Row>
            
            <Row className="mt-4"> 
                <Col xs={12}> 
                    <h2 className="text-center">Favorites</h2> 
                    <FavoritesList />
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;
