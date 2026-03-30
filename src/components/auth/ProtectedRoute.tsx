import type { JSX } from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const loggedIn = localStorage.getItem("loggedIn");

  if (loggedIn !== "true") {
    return <Navigate to="/signup" />;
  }

  return children;
};

export default ProtectedRoute;
