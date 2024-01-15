// About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './about.css';

const About = () => {
  const navigate = useNavigate();

  const handleWheel = (event) => {
    if (event.deltaX > 0) {
      navigate('/about2');
    }
    if (event.deltaX < 0) {
      navigate('/');
    }
  };

  const dardoImageStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    margin: '10px',
    width: '600px',
    height: 'auto',
    animation: 'moveDardo 10s linear infinite', // Adicionando a animação CSS
  };

  const backgroundImageStyle = {
    background: `url("/img/background.png") center / cover no-repeat`,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  };

  return (
    <div onWheel={handleWheel} style={backgroundImageStyle}>
      
      {/* Conteúdo sobre a empresa */}
      <img src="/img/DARDO3.png" alt="" style={dardoImageStyle} />
    </div>
  );
};

export default About;
