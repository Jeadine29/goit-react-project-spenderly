import React from 'react';
import './RegisterPage.css';
import SpenderlyLogo from '../assets/Spenderly9.png'; // Corrected path

const RegisterPage = () => {
  return (
    <div className="register-container">
      <div className="register-content">
        <img src={SpenderlyLogo} alt="Spenderly Logo" />
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
