import apiClient from './apiClient';

export const getTransactions = async () => {
  const response = await apiClient.get('/transactions/');
  return response.data;
};

export const createTransaction = async (transactionData) => {
  const response = await apiClient.post('/transactions/', transactionData);
  return response.data;
};
