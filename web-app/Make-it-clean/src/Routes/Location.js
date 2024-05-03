import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG from './image/logo/Location.png';
import './css/App.css';

function Location() {
  const navigate = useNavigate();

  const Home = () => {
    navigate('/Home');
  };

  const Options = () => {
    navigate('/Options');
  };

  const Personal = () => {
    navigate('/Personal');
  };

  const Floor_1 = () => {
    navigate('/Floor_1');
  };
  
  return (
    <div className="user-container">
      <img src={BG} alt="UGBN" className="user-background-image" />

      <button className="user-options-button" onClick={Options} style={{ fontSize: '30px' }}></button>
      <button className="user-home-button" onClick={Home} style={{ fontSize: '30px' }}></button>
      <button className="user-personal-button" onClick={Personal} style={{ fontSize: '30px' }}></button>
      <button className="user-floor-1-button" onClick={Floor_1} style={{ fontSize: '30px' }}></button>
    </div>
  );
}

export default Location;
