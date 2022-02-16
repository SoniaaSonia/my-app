import React from "react";
import { useHistory } from "react-router-dom";
import NotFound from "../error";
const Sidebar = () => {
  const history = useHistory();
  return (
    <aside className="left-sidebar" data-sidebarbg="skin6">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <ul id="sidebarnav" className="in">
            <li className="sidebar-item selected">
              <div
                className="sidebar-link waves-effect waves-dark sidebar-link active"
                aria-expanded="false"
              >
                <i
                  className="me-3 mdi mdi-view-dashboard fs-3"
                  aria-hidden="true"
                />
                <span className="hide-menu" onClick={() => history.push("/")}>
                  Dashboard
                </span>
              </div>
            </li>
            <li className="sidebar-item">
              <div
                className="sidebar-link waves-effect waves-dark sidebar-link"
                aria-expanded="false"
              >
                <i
                  className="me-3 mdi mdi-account-network fs-3"
                  aria-hidden="true"
                />
                <span
                  className="hide-menu"
                  onClick={() => history.push("/profile")}
                >
                  Profile
                </span>
              </div>
            </li>
            <li className="sidebar-item">
              <div
                className="sidebar-link waves-effect waves-dark sidebar-link"
                aria-expanded="false"
              >
                <i
                  className="me-3 mdi mdi-border-all fs-3"
                  aria-hidden="true"
                />
                <span
                  className="hide-menu"
                  onClick={() => history.push("/user")}
                >
                  Table
                </span>
              </div>
            </li>
            <li className="sidebar-item">
              <div
                className="sidebar-link waves-effect waves-dark sidebar-link"
                aria-expanded="false"
              >
                <i
                  className="me-3 mdi mdi-alert-outline fs-3"
                  aria-hidden="true"
                />
                <span className="hide-menu" onClick={() => history.push("/404")}>
                Error 404
                </span>
              </div>
            </li>
            <li className="text-center p-20 upgrade-btn">
              <div className="btn btn-danger text-white mt-4" target="_blank">
                Upgrade to Pro
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
