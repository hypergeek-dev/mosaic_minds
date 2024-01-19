import jwtDecode from 'jwt-decode';
import { axiosReq } from './AxiosDefaults';


const refreshAccessToken = async () => {
  try {

    const response = await axiosReq.post('/dj-rest-auth/token/refresh/');
    const newAccessToken = response.data.access_token;

    localStorage.setItem('accessToken', newAccessToken);


    axiosReq.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
  } catch (error) {
 
    console.error('Token refresh failed:', error);
  }
};

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {
  
    console.error('Fetch data error:', err);
  }
};

export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem('refreshTokenTimestamp', refreshTokenTimestamp);
};

export const shouldRefreshToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    return true; 
  }

  const accessTokenExp = jwtDecode(accessToken).exp;
  const currentTime = Math.floor(Date.now() / 1000);
  const refreshTokenTimestamp = parseInt(localStorage.getItem('refreshTokenTimestamp'), 10);

  return currentTime > accessTokenExp || refreshTokenTimestamp <= currentTime;
};

export const removeTokenTimestamp = () => {
  localStorage.removeItem('refreshTokenTimestamp');
};


refreshAccessToken();
