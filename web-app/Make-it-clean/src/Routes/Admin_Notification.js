import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG from './image/logo/Admin_Notification.png';
import './css/App.css';

function Admin_Notification() {
  const navigate = useNavigate();

  const Admin_Options = () => {
    navigate('/Admin_Options');
  };

  const Admin_Home = () => {
    navigate('/Admin_Home');
  };

  const Admin_Manual = () => {
    const pdfPath = process.env.PUBLIC_URL + 'Manual.pdf';
    window.open(pdfPath, '_blank');
  }; 

  return (
    <div className="admin-container">
      <img src={BG} alt="UGBN" className="admin-background-image" />

      <button className="admin-options-button" onClick={Admin_Options} style={{ fontSize: '30px' }}></button>
      <button className="admin-home-button" onClick={Admin_Home} style={{ fontSize: '30px' }}></button>
      <button className="admin-manual-button" onClick={Admin_Manual} style={{ fontSize: '30px' }}></button>
    </div>
  );
}

export default Admin_Notification;
