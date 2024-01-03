import React, { useState } from 'react';
import {
  HashRouter as Router, // Changed BrowserRouter to HashRouter
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Inicio from './Inicio';
import Objetivo from './Objetivo';
import Contacto from './Contacto';
import Footer from './Footer';
import AcercaNosotros from './AcercaNosotros';
import carreteraVideo from '../images/carreteraVideo.mp4';

import { FaWhatsapp } from 'react-icons/fa';
import Servicios from './Servicios';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [showWA, setshowWA] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
    setshowWA(true);
  };

  const containerStyle = {
    backgroundImage: `url(${carreteraVideo})`
  };

  return (
    <div className="App">
      <Router> {/* Here, Router is now HashRouter */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca-nosotros" element={<AcercaNosotros />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
