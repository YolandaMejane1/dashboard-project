import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import "./App.css";
import dashboard from "./assets/dashboard.png";
import facebookLogo from "./assets/Facebook_Logo_Primary.png";
import googleLogo from "./assets/web_light_rd_na@2x.png";
import Dashboard from './pages/dashboard.jsx';
import { FaBolt } from 'react-icons/fa';

const mockUsers = [
  { email: "user@example.com", password: "password123" },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = mockUsers.find(user => user.email === email && user.password === password);
    if (user) {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container-fluid flex h-screen p-0">
      <div className="left-section d-none d-md-flex flex-column justify-center align-items-center text-white p-8">
        <h1 className="logo text-2xl font-bold"><FaBolt className="inline mr-2" />Hiphonic</h1>
        <div className="dashboard-preview">
          <img src={dashboard} alt="dashboard" className="dashboard max-w-xs h-auto" />
        </div>
        <p className="welcome-text text-xl font-semibold">Welcome to your Dashboard</p>
        <p className="subtext text-lg">Everything you need to manage your online store</p>
      </div>

      <div className="right-section flex flex-column justify-center align-items-center p-8 bg-white">
        <h2 className="text-2xl font-bold">Sign In to your Account</h2>
        <p>Welcome back! Please enter your details.</p>
        
        {error && <p className="text-red-500">{error}</p>}

        <form className="login-form flex flex-col gap-4 w-full max-w-sm" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="input-field p-2 border border-gray-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field p-2 border border-gray-300 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="options flex justify-between">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password text-blue-500">Forgot Password?</a>
          </div>
          <button type="submit" className="sign-in-btn bg-blue-500 text-white py-2 rounded-lg">Sign In</button>
        </form>
        <div className="social-login text-center mt-4">
          <p>Or sign in with</p>
          <button className="social-btn google bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center py-2 mt-2">
            <img src={googleLogo} alt="google logo" className="google-logo w-6 h-6 mr-2" />
            Google
          </button>
          <button className="social-btn facebook bg-white border border-gray-300 rounded-lg flex items-center justify-center py-2 mt-2">
            <img src={facebookLogo} alt="facebook logo" className="facebook-logo w-6 h-6 mr-2" />
            Facebook
          </button>
        </div>
        <p className="sign-up mt-4 text-sm">Don't have an account? <a href="#" className="text-blue-500">Sign Up</a></p>
      </div>
    </div>
  );
}

export default App;