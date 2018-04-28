import React, { Component } from "react";
import LoginForm from "./LoginForm";
import "../styles/loginPage.css";

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <h2> Sign in </h2>
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;