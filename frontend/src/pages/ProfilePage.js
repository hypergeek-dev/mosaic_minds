import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProfileDetails from '../components/ProfileDetails';
import ProfileEditForm from '../components/ProfileEditForm';

const ProfilePage = () => {
    let { path } = useRouteMatch();

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Switch>
                        <Route exact path={path} component={ProfileDetails} />
                        <Route path={`${path}/edit`} component={ProfileEditForm} />
                    </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;
