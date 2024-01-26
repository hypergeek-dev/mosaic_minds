import React, { useEffect, useState } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { axiosReq } from "../api/AxiosDefaults";
import { useCurrentUser } from "../auth/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ProfileDetails() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profile, setProfile] = useState({});
  const currentUser = useCurrentUser();

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        try {
          const { data } = await axiosReq.get(`/profiles/${currentUser.id}/edit/`);
          setProfile(data);
          setHasLoaded(true);
        } catch (err) {
          // Error handling
        }
      };
      fetchData();
    }
  }, [currentUser]);

  const profileId = profile.id;
  const profileDetails = (
    <Card className="text-center">
      <Card.Header>
        <h3 className="m-0">
          {profile?.owner || 'No Owner'}
          <Link to={`/profiles/${profileId}/edit/`} className="ms-2 button-spacing">
            <FontAwesomeIcon icon={faUserEdit} />
          </Link>
        </h3>
      </Card.Header>
      <Card.Body>
        <Row className="mb-2">
          <Col><strong>First Name:</strong> {profile?.first_name || 'No First Name'}</Col>
          <Col><strong>Last Name:</strong> {profile?.last_name || 'No Last Name'}</Col>
        </Row>
        <Row className="mb-2">
          <Col><strong>Email:</strong> {profile?.email || 'No Email'}</Col>
          <Col><strong>Phone Number:</strong> {profile?.phonenumber || 'No Phone Number'}</Col>
        </Row>
        <Row className="mb-2">
          <Col><strong>Role:</strong> {profile?.role_at_meeting || 'No Role'}</Col>
          <Col><strong>Joined:</strong> {profile?.created_at || 'No Join Date'}</Col>
        </Row>
      </Card.Body>
    </Card>
  );

  return (
    <Container className="my-4">
      {hasLoaded ? profileDetails : <p>Loading...</p>}
    </Container>
  );
}

export default ProfileDetails;
