import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!usernameState || !passwordState) {
      setErrorMessage("All fields needs to be filled");
      return;
    }
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameState,
        password: passwordState,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          setErrorMessage("Incorrect Credentials!");
          throw new Error("Incorrect Credentials");
        }
      })
      .then((data) => {
        localStorage.setItem("id", data.id);
        localStorage.setItem("token", data.token);
        navigate("/profile");
      })
      .catch(() => {
        setErrorMessage("Error");
      });
  };

  return (
    <div className="mainContainer">
      <div className="background-box">
        <div className="form-container">
          <div className="form-box">
            <p className="title">Welcome back! 👋</p>
            <h1 className="form_title">Sign in to your account</h1>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={usernameState}
              onChange={(e) => setUsernameState(e.target.value)}
            />
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              value={passwordState}
              onChange={(e) => setPasswordState(e.target.value)}
            />
            <button type="button" onClick={handleLogin}>
              Continue
            </button>

            <p className="errorMessage">{errorMessage}</p>
            <a className="forgotText" href="#">
              Forgot your password ?
            </a>
          </div>

          <p>
            Don't have an account ?
            <a className="signupText" href="#" target="_blank">
              {" "}
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
