import axios from 'axios';

axios.defaults.baseURL = 'https://8000-hypergeekde-mosaicminds-87cb1r5j6l6.ws-eu107.gitpod.io';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';