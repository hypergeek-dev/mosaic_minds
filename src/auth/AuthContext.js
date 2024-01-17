import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      try {
        const response = await axios.get('/users/current/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCurrentUser(response.data);
      } catch (err) {
        console.error(err);
        localStorage.removeItem('jwtToken');
      }
    }
  };

  useEffect(() => {
    handleMount();

    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          try {
            const response = await axios.post('/api-token-refresh/');
            localStorage.setItem('jwtToken', response.data.access_token);
            return axios({
              ...error.config,
              headers: {
                ...error.config.headers,
                Authorization: `Bearer ${response.data.access_token}`,
              },
            });
          } catch (refreshError) {
            console.error(refreshError);
            setCurrentUser(null);
            localStorage.removeItem('jwtToken');
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  },
[]);

return (
<CurrentUserContext.Provider value={currentUser}>
<SetCurrentUserContext.Provider value={setCurrentUser}>
{children}
</SetCurrentUserContext.Provider>
</CurrentUserContext.Provider>
);
}
  
  export default CurrentUserContext;