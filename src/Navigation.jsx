import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  let navigate = useNavigate();
  const getAuth = () => localStorage.getItem("simple-app-logged-in");

  const handleLogout = () => {
    //   using local storage instead of API just for demo
    localStorage.removeItem("simple-app-logged-in");
    navigate("/");
  };

  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <h3 className="title nav-title">Simple App</h3>
        </a>
      </div>

      {getAuth() && (
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" onClick={() => navigate("/home")}>
              Home
            </a>
            <a className="navbar-item" onClick={() => navigate("/add")}>
              Add Person
            </a>
          </div>
        </div>
      )}

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {getAuth() ? (
                <a className="button is-primary" onClick={() => handleLogout()}>
                  <strong>Logout</strong>
                </a>
              ) : (
                <a className="button is-primary">
                  <strong>Login</strong>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
