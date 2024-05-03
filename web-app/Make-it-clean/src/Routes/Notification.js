import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG from './image/logo/Notification.png';
import './css/App.css';

function Notification() {
  const navigate = useNavigate();

  const Home = () => {
    navigate('/Home');
  };

  return (
    <div className="user-container">
      <img src={BG} alt="UGBN" className="user-background-image" />

      <button className="user-notification-ex-button" onClick={Home} style={{ fontSize: '30px' }}></button>
    </div>
  );
}

export default Notification;