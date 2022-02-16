import React from "react";
import { useHistory } from "react-router-dom";
const NotFound = () => {
  const history = useHistory();
  return (
    <div>
      <div className="main-wrapper">
        <div className="preloader">
          <div className="lds-ripple">
            <div className="lds-pos" />
            <div className="lds-pos" />
          </div>
        </div>
        <div className="error-box">
          <div className="error-body text-center">
            <h1 className="error-title">404</h1>
            <h3 className="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
            <p className="text-muted mb-4 mt-4">
              YOU SEEM TO BE TRYING TO FIND HIS WAY HOME
            </p>
            <div
              className="btn btn-info btn-rounded waves-effect waves-light mb-4 text-white"
              onClick={() => history.push("/")}
            >
              Back to home
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
