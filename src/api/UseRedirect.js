import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    // Perform redirection based on the user's authentication status
    if (userAuthStatus === "loggedIn") {
      history.push("/");
    } else if (userAuthStatus === "loggedOut") {
      history.push("/"); // Redirect to login page or any other page as per your logic
    }
  }, [history, userAuthStatus]);
};
