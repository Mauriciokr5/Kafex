import React from 'react';
import BannerIndex from '../images/BannerIndex.mp4';
import Header from './Header';
import Home from './Home';
import Objetivo from './Objetivo';
import InicioCarousel from './InicioCarousel';
import Contacto from './Contacto';

const Inicio = () => {
    return (
        <>
            <div className='containerStyleHome'>
                <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '99%', objectFit: 'cover', zIndex: -1 }}>
                    <source src={BannerIndex} type="video/mp4" />
                    El navegador no soporta video.
                </video>
                <div>
                    <Header />
                    <Home />
                </div>
            </div>
            <Objetivo />
            <InicioCarousel />
            <Contacto />
        </>
    );
};

export default Inicio;
