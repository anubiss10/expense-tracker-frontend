import apiClient, { setAuthToken } from './apiClient';

export const login = async (credentials) => {
  const response = await apiClient.post('users/login/', credentials);
  const { access } = response.data;

  // Configurar token en Axios
  setAuthToken(access);

  // Guardar en localStorage
  localStorage.setItem('accessToken', access);

  return response.data;
};

export const register = async (userData) => {
  const response = await apiClient.post('users/register/', userData);
  return response.data;
};

export const logout = () => {
  // Limpiar el token de localStorage y Axios
  localStorage.removeItem('accessToken');
  setAuthToken(null);
};
