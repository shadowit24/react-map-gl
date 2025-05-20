

import { Outlet } from 'react-router';

export default function ProtectedLayout() {
  // const isAuthenticated = Boolean(localStorage.getItem('token')); // Replace with real auth check

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  return <div className="w-screen h-screen relative">
      <Outlet />
    </div>; // Render nested child routes
}
