// App.js
import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Popup from './Popup'; // Importa el componente Popup
import Header from './Header';
import Home from './Home';
import Objetivo from './Objetivo'
import Especialidades from './Especialidades';
import Contacto from './Contacto';
import Footer from './Footer';
import Clientes from './Clientes';
import garperhome from '../images/garperhome.jpg'
import carreteraVideo from '../images/carreteraVideo.mp4'

import {  FaWhatsapp } from 'react-icons/fa';

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
      <div className='containerStyleHome'>
        <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '99%', objectFit: 'cover', zIndex: -1 }}>
          <source src={carreteraVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div >
          <Header />
          <Home />
        </div>
      </div>
      <Objetivo />
      <Especialidades />
      <Clientes />
      <Contacto />
      <Footer />

      {/* {showPopup && <Popup onClose={handleClosePopup} />} */}
      {showWA && <a className="whatsapp-button" href="https://wa.me/525545025100?text=Hola,%20estoy%20interesado%20en%20sus%20servicios%20legales.%20Me%20gustaría%20hacer%20una%20cita." target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={30} className="mr-3 whatsappButtonColor" />
      </a>}
    </div>
  );
}

export default App;
