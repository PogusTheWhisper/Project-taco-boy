import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG from './image/logo/Floor_1.png';
import './css/App.css';

function Floor_01() {
  const navigate = useNavigate();

  const Home = () => {
    navigate('/Home');
  };

  const Options = () => {
    navigate('/Options');
  };

  const Location = () => {
    navigate('/Location');
  };

  const Room_313 = () => {
    navigate('/Room_313');
  };


  
  return (
    <div className="user-container">
      <img src={BG} alt="UGBN" className="user-background-image" />

      <button className="user-options-button" onClick={Options} style={{ fontSize: '30px' }}></button>
      <button className="user-home-button" onClick={Home} style={{ fontSize: '30px' }}></button>
      <button className="user-location-ex-button" onClick={Location} style={{ fontSize: '30px' }}></button>
      <button className="user-room-313-button" onClick={Room_313} style={{ fontSize: '30px' }}></button>
    </div>
  );
}

export default Floor_01;
