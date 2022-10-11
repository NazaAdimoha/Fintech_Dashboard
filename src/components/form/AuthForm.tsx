import React, { useState } from "react";
import { ChangeEvent } from "react";
import AuthButton from "../AuthButton";
import AuthInput from "../AuthInput";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim());
    console.log(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
    console.log(e.target.value);
  };

  const togglePassword = () => {
    
      showPassword ? setShowPassword(false) : setShowPassword(true);
    
  }
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
        <div className="toggle--visibility">
          <AuthInput
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            className="auth--password"
          />
          <div className="toggle--button" onClick={togglePassword}>
            {showPassword ? "Hide" : "Show"}
          </div>
        </div>

        <p className="forgot--password">FORGOT PASSWORD?</p>

        <AuthButton
          className="auth--button"
          text={"LOG IN"}
        />
      </form>
    </div>
  );
};

export default AuthForm;
