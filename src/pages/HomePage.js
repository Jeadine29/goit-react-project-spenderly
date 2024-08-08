import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import SpenderlyBG1 from '../assets/Spenderly-BG1.jpg'; // Corrected path
import SpenderlyLogo from '../assets/Spenderly9.png'; // Corrected path

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div
        className="background-art"
        style={{ backgroundImage: `url(${SpenderlyBG1})` }}
      ></div>
      <div className="modal-content">
        <img src={SpenderlyLogo} alt="Spenderly Logo" />
        <h1>Welcome to Spenderly</h1>
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/register')}>Register</button>
      </div>
    </div>
  );
};

export default HomePage;
