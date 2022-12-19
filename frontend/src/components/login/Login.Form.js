import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const loginHandle = () => {
    navigate("/Admin");
  };

  const emailHandle = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form
      action=""
      name="loginform"
      onSubmit={loginHandle}
      className="login_form"
    >
      <input
        type="email"
        name="email"
        id="email"
        onChange={emailHandle}
        value={email}
        required
        placeholder="Email"
        className="login_form--input"
      />

      <br />

      <input
        type="password"
        name="password"
        id="password"
        onChange={passwordHandle}
        value={password}
        required
        placeholder="Password"
        className="login_form--input"
      />

      <br />

      <div className="bouton" onClick={loginHandle}>
        VALIDER
      </div>

      <div className="login_form--error">{errorMsg}</div>
    </form>
  );
};

export default LoginForm;
