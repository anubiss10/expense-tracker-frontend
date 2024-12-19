import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

export const setAuthToken = (token) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

setAuthToken(localStorage.getItem('accessToken')); // Asegúrate de que el token esté configurado

export const fetchTransactions = async () => {
  const response = await apiClient.get('transactions/');
  return response.data;
};

export const fetchSubscriptions = async () => {
  const response = await apiClient.get('subscriptions/');
  return response.data;
};

export default apiClient;
