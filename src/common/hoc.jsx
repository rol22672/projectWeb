import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  const userInfo = localStorage.getItem('user');

  // Verificar si ambos, token y la información del usuario, están presentes
  if (!token || !userInfo) {
    // No autenticado o token no presente, redirigir a la página de Login
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;