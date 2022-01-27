import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../../providers/Auth/Auth.provider";

// eslint-disable-next-line react/prop-types
function Private({ component: Component, path }) {
  const { authed } = useAuthContext();
  console.log(authed);

  if (authed === false) {
    return <Navigate replace to="/login" />;
  }
  return <Route exact path={path} element={<Component />} />;
}

export default Private;
