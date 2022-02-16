import React from "react";
import { Route, Redirect } from "react-router-dom";
function PrivateRoute({ component: Component, ...rest }) {
  const user = localStorage.getItem("token");
  const admin = localStorage.getItem("adminToken");

  return (
    <Route
      {...rest}
      render={(props) => {
        return user || admin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}
export default PrivateRoute;
