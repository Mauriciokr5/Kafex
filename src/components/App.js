import React, { useState } from 'react';
import {
  HashRouter as Router, // Changed BrowserRouter to HashRouter
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Inicio from './Inicio';
import Cotizacion from './Cotizacion';
import Footer from './Footer';
import AcercaNosotros from './AcercaNosotros';

import { FaWhatsapp } from 'react-icons/fa';
import Servicios from './Servicios';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [showWA, setshowWA] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
    setshowWA(true);
  };


  return (
    <div className="App">
      <Router> {/* Here, Router is now HashRouter */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca-nosotros" element={<AcercaNosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/cotizacion" element={<Cotizacion />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
