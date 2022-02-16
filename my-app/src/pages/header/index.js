import React from "react";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  const user = localStorage.getItem("token");
  const admin = localStorage.getItem("adminToken");

  const handleClick = () => {
    if (user || admin) {
      localStorage.clear();
      history.push("/login");
    } else {
      history.push("/");
    }
  };

  return (
    <header className="topbar">
      <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        <div className="navbar-header" data-logobg="skin6">
          <div className="navbar-brand" onClick={() => history.push("/")}>
            <b className="logo-icon">
              <img
                src="./images/logo-icon.png"
                alt="homepage"
                className="dark-logo"
              />
            </b>
            <span className="logo-text">
              <img
                src="./images/logo-text.png"
                alt="homepage"
                className="dark-logo"
              />
            </span>
          </div>

          <div className="nav-toggler waves-effect waves-light text-dark d-block d-md-none">
            <i className="ti-menu ti-close" />
          </div>
        </div>

        <div
          className="navbar-collapse collapse"
          id="navbarSupportedContent"
          data-navbarbg="skin5"
        >
          <ul className="navbar-nav me-auto mt-md-0 ">
            <li className="nav-item hidden-sm-down">
              <div className="app-search ps-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
                <div className="srh-btn">
                  <i className="ti-search" />
                </div>
              </div>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle waves-effect waves-dark"
                onClick={() => history.push("/user")}
              >
                <p>Table</p>
              </div>
              <div
                className="nav-link dropdown-toggle waves-effect waves-dark"
                onClick={handleClick}
              >
                <p>Logout</p>
              </div>
              <div
                className="nav-link dropdown-toggle waves-effect waves-dark"
                onClick={() => history.push("/profile")}
              >
                <img
                  src="./images/users/1.jpg"
                  alt="user"
                  className="profile-pic me-2"
                />
                {props.text}
              </div>
              <ul
                className="dropdown-menu show"
                aria-labelledby="navbarDropdown"
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
