import apiClient from './apiClient';

export const fetchSubscriptions = async () => {
  const response = await apiClient.get('/subscriptions/');
  return response.data;
};
