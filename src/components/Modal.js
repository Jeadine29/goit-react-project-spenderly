import React from 'react';
import './Modal.css';
import SpenderlyLogo from '../assets/Spenderly9.png'; // Corrected path

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal-inner">
        <img src={SpenderlyLogo} alt="Spenderly Logo" />
        {children}
      </div>
    </div>
  );
};

export default Modal;
