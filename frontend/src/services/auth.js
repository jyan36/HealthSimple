import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const API_URL = 'http://localhost:5000/api';

const login = (email, password) => {
  return axios.post(`${API_URL}/auth`, { email, password });
};

const logout = () => {
  localStorage.removeItem('token');
};

const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return jwtDecode(token);
  }
  return null;
};

export default {
  login,
  logout,
  getCurrentUser,
};
