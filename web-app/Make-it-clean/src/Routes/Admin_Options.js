import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG from './image/logo/Admin_Options.png';
import './css/App.css';

function Admin_Options() {
  const navigate = useNavigate();

  const Admin_Home = () => {
    navigate('/Admin_Home');
  };

  const Admin_Notification = () => {
    navigate('/Admin_Notification');
  };

  const Logout = () => {
    navigate('/');
  };

  return (
    <div className="admin-container">
      <img src={BG} alt="UGBN" className="admin-background-image" />

      <button className="admin-notification-button" onClick={Admin_Notification} style={{ fontSize: '30px' }}></button>
      <button className="admin-home-button" onClick={Admin_Home} style={{ fontSize: '30px' }}></button>
      <button className="admin-logout-button" onClick={Logout} style={{ fontSize: '30px' }}></button>
    </div>
  );
}

export default Admin_Options;
