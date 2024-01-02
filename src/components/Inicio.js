import React from 'react';
import carreteraVideo from '../images/carreteraVideo.mp4'
import Header from './Header';
import Home from './Home';
import Objetivo from './Objetivo';

const Inicio = () => {
    return (
        <>
        <div className='containerStyleHome'>
            <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '99%', objectFit: 'cover', zIndex: -1 }}>
                <source src={carreteraVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div>
                <Header />
                <Home />
            </div>
        </div>
        <Objetivo />
        </>
    );
};

export default Inicio;
