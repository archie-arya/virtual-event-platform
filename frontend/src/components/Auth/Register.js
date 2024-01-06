// src/components/Auth/Register.js
import React, { useState } from 'react';
import axios from '../../services/api';

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('/auth/register', userData);

      if (response && response.data) {
        console.log('User registered successfully:', response.data);
      } else {
        console.error('Registration failed. No data received from the server.');
      }
    } catch (error) {
      console.error('Registration failed:', error.message);
      // Optionally, you can also handle specific error cases here
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
