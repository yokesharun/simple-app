import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  let navigate = useNavigate();

  const handleLogin = () => {
    //   using local storage instead of API just for demo
    if (!localStorage.getItem("simple-app-logged-in")) {
      localStorage.setItem("simple-app-logged-in", true);
      navigate("/home");
    }
  };

  return (
    <div className="login-section">
      <section className="section is-small">
        <div className="field">
          <label className="label">Email Address</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Email"
              value="test@test.com"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value="Pass32265%^"
            />
          </div>
        </div>
        <div className="login-links">
          <a href="">Recover Password</a>
          <a href="">Sign Up</a>
        </div>
        <div>
          <button onClick={() => handleLogin()} className="button is-dark">
            Login
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
