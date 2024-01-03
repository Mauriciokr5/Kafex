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
            <div className='header-combinado-container'>
                <video autoPlay loop muted className='header-combinado-video'>
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
