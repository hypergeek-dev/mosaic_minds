import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../api/AxiosDefaults";
import { useCurrentUser } from "../auth/AuthContext";
import ProfileEditForm from "./ProfileEditForm";

function ProfileDetails() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profile, setProfile] = useState({});
  const [editMode, setEditMode] = useState(false);
  const currentUser = useCurrentUser();

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        try {
          const { data } = await axiosReq.get(`/profiles/${currentUser.id}/edit/`);
          setProfile(data);
          setHasLoaded(true);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }
  }, [currentUser]);

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <Container className="my-4">
      {hasLoaded ? (
        editMode ? (
          <ProfileEditForm profile={profile} onCancel={handleCancelEdit} />
        ) : (
          // Render profile details if not in edit mode
          // Render an edit button to toggle edit mode
          <>
            <h3>{profile?.owner || 'No Owner'}</h3>
            <p><strong>First Name:</strong> {profile?.first_name || 'No First Name'}</p>
            <p><strong>Last Name:</strong> {profile?.last_name || 'No Last Name'}</p>
            <p><strong>Email:</strong> {profile?.email || 'No Email'}</p>
            <p><strong>Phone Number:</strong> {profile?.phonenumber || 'No Phone Number'}</p>
            <p><strong>Role:</strong> {profile?.role_at_meeting || 'No Role'}</p>
            <button onClick={toggleEditMode}>Edit Profile</button>
          </>
        )
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}

export default ProfileDetails;
