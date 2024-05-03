import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG from './image/logo/Room_313.png';
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

  const Trash_1 = () => {
    navigate('/Trash_1');
  };

  const Trash_2 = () => {
    navigate('/Trash_2');
  };

  
  return (
    <div className="user-container">
      <img src={BG} alt="UGBN" className="user-background-image" />

      <button className="user-options-2-button" onClick={Options} style={{ fontSize: '30px' }}></button>
      <button className="user-home-2-button" onClick={Home} style={{ fontSize: '30px' }}></button>
      <button className="user-location-ex-2-button" onClick={Location} style={{ fontSize: '30px' }}></button>
      <button className="user-trash-2-button" onClick={Trash_2} style={{ fontSize: '30px' }}></button>
      <button className="user-trash-1-button" onClick={Trash_1} style={{ fontSize: '30px' }}></button>
    </div>
  );
}

export default Floor_01;
