import React, { useState, useContext } from 'react';
import { login } from '../services/authService';
import { setAuthToken } from '../services/apiClient';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Importa los estilos

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login: setUser } = useContext(AuthContext); // Contexto de autenticación
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      const token = response.access;

      setAuthToken(token); // Guarda el token en Axios
      setUser(token); // Actualiza el contexto de usuario

      localStorage.setItem('token', token); // Guarda en localStorage
      console.log('Login exitoso');
      navigate('/dashboard'); // Redirige al Dashboard
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response?.data || error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome back 👋</h1>
      <h2>
        To <span className="highlight">SubTrackr</span>
      </h2>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="login-input"
        />
        <button type="submit" className="login-btn">
          Log in ➡️
        </button>
      </form>
    </div>
  );
};

export default Login;
