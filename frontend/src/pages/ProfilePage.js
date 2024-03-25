import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileDetails from '../components/ProfileDetails';
import FavoritesList from '../components/FavoritesList';

const ProfilePage = () => {
    return (
        <Container fluid> 
         
            <Row className="mt-4"> 
                <Col xs={12}> 
                    <ProfileDetails />
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
