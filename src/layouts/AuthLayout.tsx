
import { Navigate, Outlet } from 'react-router'


export const AuthLayout = () => {
  const isAuthenticated = Boolean(localStorage.getItem('token')); // Replace with real auth check

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return (
    <Outlet />
  )
}
