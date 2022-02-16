import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderField } from "../../helper/formhelper";
import "./index.css";

const required = (value) => (value ? undefined : "Required!");

const Form = (props) => {
  return (
    <div className="col-lg-8 col-xlg-9 col-md-7">
      <div className="card">
        <div className="card-body">
          <form
            className="form-horizontal form-material mx-2"
            onSubmit={props.handleSubmit}
            initialValues={props.initialValues}
          >
            <div className="form-group">
              <label className="col-md-12 mb-0">firstName</label>
              <div className="col-md-12">
                <Field
                  type="text"
                  className="form-control ps-0 form-control-line"
                  component={renderField}
                  validate={[required]}
                  name="firstName"
                  placeholder="firstName"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-12 mb-0">lastName</label>
              <div className="col-md-12">
                <Field
                  type="text"
                  className="form-control ps-0 form-control-line"
                  component={renderField}
                  validate={[required]}
                  name="lastName"
                  placeholder="lastName"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-12 mb-0">userName</label>
              <div className="col-md-12">
                <Field
                  type="text"
                  className="form-control ps-0 form-control-line"
                  component={renderField}
                  validate={[required]}
                  name="userName"
                  placeholder="userName"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 d-flex">
                <button
                  className="btn btn-success mx-auto mx-md-0 text-white"
                >
                  {props.label}
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
  form: "Form",
  enableReinitialize: true,
})(Form);
