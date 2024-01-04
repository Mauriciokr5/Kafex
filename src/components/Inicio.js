import React, { useState } from 'react';
import BannerIndex from '../images/BannerIndex.mp4';
import imageLoading from '../images/BannerIndexLoading.jpg';
import Header from './Header';
import Home from './Home';
import Objetivo from './Objetivo';
import InicioCarousel from './InicioCarousel';
import Contacto from './Contacto';

const Inicio = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    const onVideoLoad = () => {
        setVideoLoaded(true);
    };

    return (
        <>
            <div className='header-combinado-container'>
                {!videoLoaded && (
                    <img src={imageLoading} alt="Cargando video..." className="header-combinado-video" />
                )}
                <video autoPlay loop muted className='header-combinado-video' onLoadedData={onVideoLoad}>
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
