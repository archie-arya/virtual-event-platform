// src/App.js
import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import UserDashboard from './components/UserDashboard';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import './styles.css'; // Import the CSS file


const AuthContext = createContext();

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <h1>Virtual Event Platform</h1>
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/dashboard">User Dashboard</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute component={<UserDashboard />} />}
            />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

const PrivateRoute = ({ component }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? component : <Navigate to="/login" />;
};

export default App;
