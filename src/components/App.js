import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Popup from './Popup'; // Import the Popup component
import Inicio from './Inicio';
import Objetivo from './Objetivo';
import Especialidades from './Especialidades';
import Contacto from './Contacto';
import Footer from './Footer';
import Clientes from './Clientes';
import AcercaNosotros from './AcercaNosotros';
import garperhome from '../images/garperhome.jpg';
import carreteraVideo from '../images/carreteraVideo.mp4';

import { FaWhatsapp } from 'react-icons/fa';

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
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca-nosotros" element={<AcercaNosotros />} />
          {/* Add other routes here as needed */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
