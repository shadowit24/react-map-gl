import React from 'react'
import { Navigate, Outlet } from 'react-router'

type Props = {}

export const AuthLayout = (props: Props) => {
  const isAuthenticated = Boolean(localStorage.getItem('token')); // Replace with real auth check

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return (
    <Outlet />
  )
}
