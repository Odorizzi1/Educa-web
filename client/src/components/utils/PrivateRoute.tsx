import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';


interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token');


  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
