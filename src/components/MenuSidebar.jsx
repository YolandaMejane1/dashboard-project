import React from 'react';
import { MenuData } from './MenuData';
import { Logo } from '../assets/icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function MenuSidebar() {
  return (
    <div className="Sidebar d-none d-md-block"> 
      <div className="header">
        <h2><img src={Logo} alt="Logo" /> Hiphonic</h2>
      </div>
      <ul className="List">
        {MenuData.map((val, key) => (
          <li 
            key={key} 
            className="row" 
            onClick={() => { window.location.pathname = val.link }}>
            <div id="icons">{val.icon}</div>
            <div id="name">{val.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuSidebar;