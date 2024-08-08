import React from 'react';
import './LoginPage.css';
import SpenderlyLogo from '../assets/Spenderly9.png'; // Corrected path

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <img src={SpenderlyLogo} alt="Spenderly Logo" />
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
