import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProfileDetails from '../components/ProfileDetails';
import ProfileEditForm from '../components/ProfileEditForm';
import FavoritesList from '../components/FavoritesList';

const ProfilePage = () => {
    let { path } = useRouteMatch();

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Switch>
                        <Route exact path={path} component={ProfileDetails} />
                        <Route path={`${path}/edit`} component={ProfileEditForm} />
                    </Switch>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={12} className="text-center">
                    <h2>Favorites</h2> 
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <FavoritesList />
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;
