import React from "react";
import AuthForm from "../../components/form/AuthForm";
import pablo from "../../assets/images/pablo-sign-in 1.jpg";
import "../../styles/authLayout.css";
import lendSqr from "../../assets/images/Group.jpg";

const Login = () => {
  return (
    <div className="login--container">
      <div className="pablo--container">
        <img className="logo" src={lendSqr} alt="lendqr" />
        <img src={pablo} alt="pablo" className="pablo" />
      </div>

      <div className="form--container">
        <AuthForm />
      </div>
    </div>
  );
};

export default Login;
