import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG from './image/logo/Admin_Home.png';
import './css/App.css';

function Admin_Home() {
  const navigate = useNavigate();

  const Admin_Options = () => {
    navigate('/Admin_Options');
  };

  const Admin_Notification = () => {
    navigate('/Admin_Notification');
  };

  const PDF = () => {
    const pdfPath = process.env.PUBLIC_URL + 'Manual.pdf';
    window.open(pdfPath, '_blank');
  };  
  
  return (
    <div className="admin-container">
      <img src={BG} alt="UGBN" className="admin-background-image" />

      <button className="admin-options-button" onClick={Admin_Options} style={{ fontSize: '30px' }}></button>
      <button className="admin-notification-button" onClick={Admin_Notification} style={{ fontSize: '30px' }}></button>
      <button className="admin-manual-button" onClick={PDF} style={{ fontSize: '30px' }}></button>
    </div>
  );
}

export default Admin_Home;
