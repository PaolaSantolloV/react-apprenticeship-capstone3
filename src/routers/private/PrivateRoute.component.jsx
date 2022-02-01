import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../providers/Auth/Auth.provider";

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
  const { authed } = useAuthContext();

  return authed === false ? <Navigate replace to="/login" /> : children;
}

export default PrivateRoute;
