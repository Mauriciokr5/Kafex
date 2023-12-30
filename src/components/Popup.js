import React, { useState, useEffect } from 'react';
// import './Popup.css'; // Importa el archivo de estilos
import logoCompleto from '../images/logoCompleto.png';

function Popup({ onClose }) {
    useEffect(() => {
        const handleScroll = () => {
            handleCloseWithAnimation();
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [onClose]);

    const handleCloseWithAnimation = () => {
        // Agrega la clase para iniciar la animación de fade-out
        const overlay = document.querySelector(".popup-overlay");
        overlay.classList.add("fade-out");

        // Espera a que termine la animación antes de cerrar realmente el popup
        setTimeout(() => {
            onClose();
        }, 300); // Asegúrate de que este tiempo coincida con el tiempo de transición en CSS
    };

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            handleCloseWithAnimation();
        }
    };
    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>
            <div className="popup-content">
                <img className="popup-image" src={logoCompleto} alt="Logo" onClick={handleOverlayClick}></img>
            </div>
        </div>
        
        
    );
}

export default Popup;
