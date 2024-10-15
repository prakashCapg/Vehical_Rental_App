import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Userlogin } from "../../services/User-login.service";
import InputField from "../InputField_Text/InputField_text";
import "./index.css";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before trying to log in
    const user = await Userlogin(username, password);

    if (user) {
      setUser(user);
      if (user.role === "user") {
        navigate("/user/make-booking");
      } else if (user.role === "employee") {
        navigate("/employee/vehicle-management");
      }
    } else {
      setError("Invalid username or password"); // Set the error message
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="LoginUI" style={{ paddingRight: "40px" }}>
      <div className="centerLogo">
        <div className="caption">
          <div className="book">BOOK</div>{" "}
          <div className="book-tag">Your Auto Rental</div>
        </div>
        <div className="login-container">
          <div className="Login-heading">Login</div>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-box">
              <div className="form-group">
                <label htmlFor="userName"></label>
                <input
                  className="input-field"
                  type="text"
                  id="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password"></label>
                <input
                  className="input-field"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div className="show-password-container">
              <input
                className="showpasswordcheckbox"
                type="checkbox"
                id="show-password-checkbox"
                checked={showPassword}
                onChange={toggleShowPassword}
              />
              <label htmlFor="show-password-checkbox">Show Password</label>
            </div>
            {error && <p className="login-error">{error}</p>}
            <div className="login-button">
              <button type="submit" className="loginbutton">
                SIGN IN
              </button>
            </div>
          </form>
          <p className="forgot-password-link">
            <a href="/forgot">Forgot Username/Password?</a>
          </p>
          <p className="register-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
