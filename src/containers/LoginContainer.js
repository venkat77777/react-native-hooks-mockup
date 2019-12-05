import React from "react";
import LoginScreen from "../screens/Login/LoginScreen";

const LoginContainer = () => {
  /**
   * hadleLogin: Handles the login process
   * @param {string} username the identity of the user to login
   * @param {string} password the secret key of the user to login
   **/
  const handleLogin = (username = "", password = "") => {
    console.log("login credentials", username, password);
    // useLogin({ username, password });
  };
  return <LoginScreen handleLogin={handleLogin} />;
};

export default LoginContainer;
