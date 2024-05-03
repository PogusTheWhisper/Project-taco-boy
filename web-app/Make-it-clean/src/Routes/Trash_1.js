import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG from './image/logo/Trash_1.jpg';
import './css/App.css';

function Trash_1() {
  const navigate = useNavigate();
  
  return (
    <div className="user-container">
      <img src={BG} alt="UGBN" className="user-background-image" />
    </div>
  );
}

export default Trash_1;
