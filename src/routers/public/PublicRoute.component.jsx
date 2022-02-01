import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../providers/Auth/Auth.provider";

// eslint-disable-next-line react/prop-types
function PublicRoute({ children }) {
  const { authed } = useAuthContext();

  return authed === true ? <Navigate replace to="/notes" /> : children;
}

export default PublicRoute;
