import React, { useState } from "react";
import { ChangeEvent } from "react";
import AuthButton from "../AuthButton";
import AuthInput from "../AuthInput";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim());
    console.log(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
    console.log(e.target.value);
  };
  return (
    <div>
      <h1 className="welcome">Welcome!</h1>
      <p className="details">Enter details to login.</p>

      <form action="" method="post">
        <div>
          <AuthInput
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            type="email"
            className="auth--input"
          />
        </div>
        <div>
          <AuthInput
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            type="password"
            className="auth--input"
          />
        </div>

        <p className="forgot--password">FORGOT PASSWORD?</p>

        <AuthButton
          className="auth-button"
          text={"LOG IN"}
        />
      </form>
    </div>
  );
};

export default AuthForm;
