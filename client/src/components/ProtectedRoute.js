import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // Customize this check

  return isAuthenticated ? children : <Navigate to="/admin-login" replace />;
};

export default ProtectedRoute;
