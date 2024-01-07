import React, { useState } from 'react';
import axios from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuth();

  const navigate = useNavigate();


  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/auth/login', loginData);
      console.log('Login successful:', response.data);
  
      // Call the login function from the AuthContext to update the user state
      login(response.data);
  
      // Redirect to the dashboard (update this route based on your setup)
      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Login failed:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
    }
  };
  

  return (
    <div className = "login-container">
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
