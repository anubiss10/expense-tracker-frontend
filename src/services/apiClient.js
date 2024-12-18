import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://expense-tracker-backend-production-dba5.up.railway.app/api/', 
});

export const setAuthToken = (token) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

export default apiClient;
