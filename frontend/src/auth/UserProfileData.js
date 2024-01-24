import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/AxiosDefaults";
import { useCurrentUser } from "./AuthContext";

const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    currentUserProfile: null, // State to hold the current user's profile
  });

  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchCurrentUserProfile = async () => {
      if (currentUser && currentUser.id) {
        try {
          const { data } = await axiosReq.get(`profiles/${currentUser.id}/`);
          setProfileData({ currentUserProfile: data });
        } catch (err) {
          // Handle errors here, for example logging or setting an error state
        }
      }
    };

    fetchCurrentUserProfile();
  }, [currentUser]);

  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider value={{ setProfileData }}>
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};
