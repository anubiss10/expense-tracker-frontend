import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/'); // Redirigir al login si no está autenticado
    }
  }, [user, navigate]);

  return <h1>Bienvenido al Dashboard</h1>;
};

export default Dashboard;
