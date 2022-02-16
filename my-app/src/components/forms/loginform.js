import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderField } from "../../helper/formhelper";
import "./index.css";

const required = (value) => (value ? undefined : "Required!");

const LoginForm = (props) => {
  return (
    <div className="loginform">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
        type="text/css"
      />
      <div class="login">
        <form onSubmit={props.handleSubmit}>
          <div>
            <Field
              type="email"
              className="text"
              component={renderField}
              placeholder="Email"
              label="Email"
              validate={[required]}
              name="email"
            />
          </div>
          <div>
            <Field
              type="password"
              className="text"
              name="password"
              label="Password"
              component={renderField}
              placeholder="Password"
              validate={[required]}
            />
          </div>
          <div>
            <button class="signin" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "Login",
  enableReinitialize: true,
})(LoginForm);
