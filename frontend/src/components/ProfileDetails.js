import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../api/AxiosDefaults";
import { useCurrentUser } from "../auth/AuthContext";

function ProfileDetails() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profile, setProfile] = useState({});
  const currentUser = useCurrentUser();

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        try {
          const { data } = await axiosReq.get(`/profiles/${currentUser.id}/`);
          setProfile(data);
          setHasLoaded(true);
        } catch (err) {
          // Error handling
        }
      };
      fetchData();
    }
  }, [currentUser]);

  // Adapted JSX for displaying the profile details
  const profileDetails = (
    <Row nogutters="true" className="px-3 text-center">
    <Col>
      <h3 className="m-2">{profile?.owner || 'No Owner'}</h3>
      <div><p>First Name: {profile?.first_name || 'No First Name'}</p></div>
      <div><p>Last Name: {profile?.last_name || 'No Last Name'}</p></div>
      <div><p>Email: {profile?.email || 'No Email'}</p></div>
      <div><p>Phone Number: {profile?.phonenumber || 'No Phone Number'}</p></div>
      <div><p>Role: {profile?.role_at_meeting || 'No Role'}</p></div>
      <div><p>Joined: {profile?.created_at || 'No Join Date'}</p></div>
    </Col>
  </Row>
  );

  return (
    <Container>
      {hasLoaded ? profileDetails : <p>Loading...</p>}
    </Container>
  );
}

export default ProfileDetails;
