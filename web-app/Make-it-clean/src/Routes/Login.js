import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './image/logo/Login.png';
import './css/App.css';

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    // For simplicity, let's check if the username is '001' or '002'
    if (username === 'Naphat_001') {
      // Navigate to the home page for user '001'
      navigate('/Home');
    } else if (username === 'Teacher_001') {
      // Navigate to the admin home page for user '002'
      navigate('/Admin_Home');
    } else {
      // You can handle other cases, show an error message, etc.
      console.log('Invalid username');
    }
  };

  return (
    <div className="login-container">
      <img src={Login} alt="UGBN" className="background-image" />

      <div className="login-form">
        <input
          type="text"
          id="username"
          className="transparent-placeholder"
          placeholder="Username:"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ fontSize: '20px' }} // Increase text size as needed
        />

        <input
          type="password"
          id="password"
          className="transparent-placeholder"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ fontSize: '20px' }} // Increase text size as needed
        />

        <button className= 'button-login' onClick={handleLogin}></button>
      </div>
    </div>
  );
}

export default Home;
