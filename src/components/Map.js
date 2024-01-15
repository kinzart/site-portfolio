// Map.js
import React from 'react';
import { Link } from 'react-router-dom';
import './map.css'

const backgroundImageStyle = {
  background: `url("/img/bg-map.png") center / cover no-repeat`,
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
};

const Map = () => {
  return (
    <div style={backgroundImageStyle} >
      <h1>Seja bem vinde á Kinzart</h1>
      <h3>Qual serviço lhe atenderá melhor:</h3>

      <div className="widget-container">
        <Link to="/about">
          <div className="widget">
            <header>
              <i className="fas fa-chart-bar"></i>
              <h2>Marketing</h2>
            </header>
          </div>
        </Link>

        <Link to="/technology">
          <div className="widget">
            <header>
              <i className="fas fa-cogs"></i>
              <h2>Tecnologia</h2>
            </header>
          </div>
        </Link>

        <Link to="/music">
          <div className="widget">
            <header>
              <i className="fas fa-music"></i>
              <h2>Música</h2>
            </header>
          </div>
        </Link>

        <Link to="/design">
          <div className="widget">
            <header>
              <i className="fas fa-paint-brush"></i>
              <h2>Design</h2>
            </header>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default Map;
