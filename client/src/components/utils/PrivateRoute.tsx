import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import useAuth from '../../hooks/useAuth';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
//   const isAuthenticated = useAuth();
  const token = localStorage.getItem('token');


  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
