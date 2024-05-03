import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG from './image/logo/Options.png';
import './css/App.css';

function Options() {
  const navigate = useNavigate();

  const PDF = () => {
    const pdfPath = process.env.PUBLIC_URL + 'Manual.pdf';
    window.open(pdfPath, '_blank');
  };  
  
  const Personal = () => {
    navigate('/Personal');
  };
  
  const Home = () => {
    navigate('/Home');
  };

  const Logout = () => {
    navigate('/');
  };

  return (
    <div className="user-container">
      <img src={BG} alt="UGBN" className="user-background-image" />

      <button className="user-home-button" onClick={Home} style={{ fontSize: '30px' }}></button>
      <button className="user-manual-button" onClick={PDF} style={{ fontSize: '30px' }}></button>
      <button className="user-personal-button" onClick={Personal} style={{ fontSize: '30px' }}></button>
      <button className="user-logout-button" onClick={Logout} style={{ fontSize: '30px' }}></button>
    </div>
  );
}

export default Options;