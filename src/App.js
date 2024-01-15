// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import About2 from './components/About2';
import About3 from './components/About3';
import Map from './components/Map';
import Marketing from './components/Marketing';
import Technology from './components/Technology';
import Music from './components/Music';
import Design from './components/Design';

import './index.css'; // Importe o arquivo de estilos

  
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Map />} />
        <Route path="/about2" element={<About2 />} />
        <Route path="/about3" element={<About3 />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/music" element={<Music />} />
        <Route path="/design" element={<Design />} />
    
      </Routes>
    </Router>
  );
};

export default App;
