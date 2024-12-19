import React, { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(''); // Estado para manejar errores
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      console.log('Login exitoso');
      navigate('/dashboard'); // Redirige al Dashboard
    } catch (error) {
      setError(
        error.response?.data?.detail || 'Error al iniciar sesión. Por favor, intenta de nuevo.'
      );
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
        {error && <p className="error-message">{error}</p>} {/* Mostrar errores */}
      </form>
    </div>
  );
};

export default Login;
