import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderField } from "../../helper/formhelper";
import "./index.css";

const required = (value) => (value ? undefined : "Required!");

const ProfileForm = (props) => {
  return (
    <div className="col-lg-8 col-xlg-9 col-md-7">
      <div className="card">
        <div className="card-body">
          <form
            className="form-horizontal form-material mx-2"
            onSubmit={props.handleSubmit}
          >
            <div className="form-group">
              <label className="col-md-12 mb-0">Name</label>
              <div className="col-md-12">
                <Field
                  type="text"
                  className="form-control ps-0 form-control-line"
                  component={renderField}
                  validate={[required]}
                  name="name"
                  placeholder="Markarn Doe"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-12 mb-0">Email</label>
              <div className="col-md-12">
                <Field
                  type="email"
                  className="form-control ps-0 form-control-line"
                  component={renderField}
                  validate={[required]}
                  name="email"
                  placeholder="markarn@doe.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-12 mb-0">Phone No</label>
              <div className="col-md-12">
                <Field
                  type="number"
                  className="form-control ps-0 form-control-line"
                  component={renderField}
                  validate={[required]}
                  name="phoneno"
                  placeholder="+1 233 232 2322"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-12 mb-0">Password</label>
              <div className="col-md-12">
                <Field
                  type="password"
                  name="password"
                  className="form-control ps-0 form-control-line"
                  component={renderField}
                  validate={[required]}
                  placeholder="password"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 d-flex">
                <button
                  type="submit"
                  className="btn btn-success mx-auto mx-md-0 text-white"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "profile",
  enableReinitialize: true,
})(ProfileForm);
