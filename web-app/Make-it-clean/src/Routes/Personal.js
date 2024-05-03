import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG from './image/logo/Personal.png';
import './css/App.css';

function Personal() {
  const navigate = useNavigate();
  
  const Home = () => {
    navigate('/Home');
  };
  
  const Options = () => {
    navigate('/Options');
  };

  return (
    <div className="user-container">
      <img src={BG} alt="UGBN" className="user-background-image" />

      {/* <button className="user-home-button" onClick={Options} style={{ fontSize: '30px' }}></button> */}
      {/* <button className="user-manual-button" onClick={PDF} style={{ fontSize: '30px' }}></button> */}
      <button className="user-home-button" onClick={Home} style={{ fontSize: '30px' }}></button>
      <button className="user-options-button" onClick={Options} style={{ fontSize: '30px' }}></button>
    </div>
  );
}

export default Personal;