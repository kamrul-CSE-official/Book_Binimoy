import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode, useContext } from 'react';
import { AuthContext } from '@/Providers/AuthProvider';

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { user, loading } = useContext(AuthContext)!;
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <span>Loading....</span>{' '}
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return <>{children}</>;
  }

  return <Navigate state={location.pathname} to="/login" />;
}
