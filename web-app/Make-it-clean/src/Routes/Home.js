import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG from './image/logo/Home.png';
import './css/App.css';

function Home() {
  const navigate = useNavigate();

  const Location = () => {
    navigate('/Location');
  };

  const Score = () => {
    navigate('/Score');
  };

  const PDF = () => {
    const pdfPath = process.env.PUBLIC_URL + 'Manual.pdf';
    window.open(pdfPath, '_blank');
  };  
  
  const Personal = () => {
    navigate('/Personal');
  };
  
  const Options = () => {
    navigate('/Options');
  };

  const Notification = () => {
    navigate('/Notification');
  };

  return (
    <div className="user-container">
      <img src={BG} alt="UGBN" className="user-background-image" />

      {/* <button className="user-home-button" onClick={Options} style={{ fontSize: '30px' }}></button> */}
      <button className="user-location-button" onClick={Location} style={{ fontSize: '30px' }}></button>
      {/* <button className="user-manual-button" onClick={PDF} style={{ fontSize: '30px' }}></button> */}
      <button className="user-notification-button" onClick={Notification} style={{ fontSize: '30px' }}></button>
      <button className="user-score-button" onClick={Score} style={{ fontSize: '30px' }}></button>
      <button className="user-personal-button" onClick={Personal} style={{ fontSize: '30px' }}></button>
      <button className="user-options-button" onClick={Options} style={{ fontSize: '30px' }}></button>
      <button className="user-location-button" onClick={Location} style={{ fontSize: '30px' }}></button>
    </div>
  );
}

export default Home;