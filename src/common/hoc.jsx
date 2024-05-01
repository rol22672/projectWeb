import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';


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


ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};


export default ProtectedRoute;