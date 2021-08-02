import axios from 'axios';

import { STORAGE_AUTH_KEY } from '../components/auth/constants';

const setupAxios = () => {
  axios.defaults.baseURL = process.env.apiUrl;

  const token = localStorage.getItem(STORAGE_AUTH_KEY) || '';
  if (token) {
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  }
};

export default setupAxios;
