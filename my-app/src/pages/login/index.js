import React from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "../../components/forms/loginform";
const Login = () => {
  const adminData = {
    email: "raghveer@singh.com",
    password: "123456",
  };

  const token = "723jhed-843uieu-23898h-82377";
  const adminToken = "9238ju8-skjd9-32jwjk-903ie9";

  const history = useHistory();
  const handleSubmit = (profileData) => {
    if (
      profileData.email !== adminData.email &&
      profileData.password !== adminData.password
    ) {
      localStorage.setItem("token", token);
      history.push("/");
    } else {
      localStorage.setItem("adminToken", adminToken);
      history.push("/");
    }
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
};
export default Login;
