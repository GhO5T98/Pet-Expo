import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { admin } = useContext(AuthContext);

  if (!admin) {
    return <Navigate to="/Login" />;
  }

  return children;
};

export default ProtectedRoute;
