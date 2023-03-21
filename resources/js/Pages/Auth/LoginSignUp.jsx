import React, { useState } from "react";
import "./style.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function LoginSignUp() {
  const [isSignInOpen, setIsSignInOpen] = useState(true);

  const openSignUp = () => {
    setIsSignInOpen(false);
  }

  const openSignIn = () => {
    setIsSignInOpen(true);
  }


  return (
    <div className="container">
      <div className={`overlay ${isSignInOpen ? "open-sign-in" : "open-sign-up"}`}>
        <div className="sign-in">
          <h1>Welcome Back!</h1>
          <button className="switch-button" id="slide-right-button" onClick={openSignIn}>Sign In</button>
        </div>
        <div className="sign-up">
          <h1>Join our community today</h1>
          <button className="switch-button" id="slide-left-button" onClick={openSignUp}>Sign Up</button>
        </div>
      </div>
      <div className="form">
        <div className={`sign-in ${isSignInOpen ? "" : "hidden"}`}>
          <SignIn/>
        </div>
        <div className={`sign-up ${isSignInOpen ? "hidden" : ""}`}>
          <SignUp/>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;