import React from "react";
import ProfileForm from "../../components/forms/profileform";

const Profile = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-xlg-3 col-md-5">
          <div className="card">
            <div className="card-body profile-card">
              <center className="mt-4">
                <img
                  src="./images/users/1.jpg"
                  className="rounded-circle"
                  width={150}
                  alt="user"
                />
                <h4 className="card-title mt-2">{props.textp}</h4>
                <h6 className="card-subtitle">Accoubts Manager Amix corp</h6>
              </center>
            </div>
          </div>
        </div>
        <ProfileForm onSubmit={props.handleSubmit} />
      </div>
    </div>
  );
};
export default Profile;
