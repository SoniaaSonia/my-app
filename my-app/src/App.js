import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layouts from "./components/layouts";
import PrivateRoute from "./Middleware/Private";
import PublicRoute from "./Middleware/Public";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/error";
import Login from "./pages/login";
import Profile from "./pages/profile";
import User from "./pages/user";
import Data from "./pages/userData/data";

function App() {
  const admin = localStorage.getItem("adminToken");
  const user = localStorage.getItem("token");

  const [userData, setUserData] = useState();

  const handleClick = (data) => {
    setUserData(data);
    console.log("submit", data);
  };

  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" exact component={Login} />

        {admin ? (
          <Layouts
            textP={userData && userData.name ? userData.name : "Markarn Doe"}
          >
            <PrivateRoute path="/" exact component={Dashboard} />
            <PrivateRoute path="/user" exact component={User} />
            <PrivateRoute path="/data" exact component={Data} />

            <Route
              path="/profile"
              exact
              render={(props) => (
                <Profile
                  handleSubmit={handleClick}
                  textp={
                    userData && userData.name ? userData.name : "Markarn Doe"
                  }
                  {...props}
                />
              )}
            />
          </Layouts>
        ) : (
          <>
            <Layouts
              textP={userData && userData.name ? userData.name : "Markarn Doe"}
            >
              <PrivateRoute path="/" exact component={Dashboard} />
              <Route
                path="/profile"
                exact
                render={(props) => (
                  <Profile
                    handleSubmit={handleClick}
                    textp={
                      userData && userData.name ? userData.name : "Markarn Doe"
                    }
                    {...props}
                  />
                )}
              />
            </Layouts>
          </>
        )}

        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
