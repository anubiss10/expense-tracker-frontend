import apiClient from './apiClient';

export const fetchTransactions = async () => {
  const response = await apiClient.get('transactions/');
  return response.data;
};
