// About.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './about.css';


const About3 = () => {
  const navigate = useNavigate();
  const [canNavigate, setCanNavigate] = useState(false);

  useEffect(() => {
    // Aguarde 3 segundos antes de permitir a navegação
    const timer = setTimeout(() => {
      setCanNavigate(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); // Executa apenas uma vez ao montar o componente

  const handleWheel = (event) => {
    if (event.deltaX > 0 && canNavigate) {
      navigate('/map');
    }
    if (event.deltaX < 0 && canNavigate) {
      navigate('/about2');
    }
  };

  const dardoImageStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    margin: '10px',
    width: '100vw',
    height: 'auto',
    animation: 'moveDardo 10s linear infinite', // Adicionando a animação CSS
  };

  const backgroundImageStyle = {
    background: `url("/img/bg-about3.png") center / cover no-repeat`,
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
      <img src="/img/like.png" alt="" style={dardoImageStyle} />
      
    </div>
  );
};

export default About3;
