import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem("token");
  const admin = localStorage.getItem("adminToken");

  return (
    <Route
      {...rest}
      render={(props) => {
        return user || admin ? <Redirect to="/" /> : <Component {...props} />;
      }}
    />
  );
};
export default PublicRoute;
