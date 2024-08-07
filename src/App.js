import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  // Accessing environment variables
  const apiUrl = process.env.REACT_APP_API_URL;
  const otherVariable = process.env.REACT_APP_OTHER_VARIABLE;

  return (
    <>
      <Header />
      <main>
        <h1>Spenderly</h1>
        <p>API URL: {apiUrl}</p>
        <p>Other Variable: {otherVariable}</p>
      </main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
