import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import { axiosReq } from "../api/AxiosDefaults";

function ProfileDetails() {
  // State for loading status and profile details
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profile, setProfile] = useState({});

  // Extract profile ID from URL
  const { id } = useParams();

  // Effect to fetch profile details when component mounts or profile ID changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${id}/`);
        setProfile(data);
        setHasLoaded(true);
      } catch (err) {
        // Error handling (currently commented out)
        // console.log(err);
      }
    };
    fetchData();
  }, [id]);

  // JSX for displaying the profile details
  const profileDetails = (
    <Row noGutters className="px-3 text-center">
      <Col>
        <h3 className="m-2">{profile.owner}</h3>
        <div>Email: {profile.email}</div>
        <div>Phone Number: {profile.phonenumber}</div>
        <div>Role: {profile.role_at_meeting}</div>
        <div>Joined: {profile.created_at}</div>
      </Col>
    </Row>
  );

  // Main return statement rendering the profile details
  return (
    <Container>
      {hasLoaded ? profileDetails : <p>Loading...</p>}
    </Container>
  );
}

export default ProfileDetails;
