import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import TransporteTerreste from '../images/1TransporteTerrestre.jpg';
import TransporteMaritimo from '../images/2TransporteMaritimo.jpg';

const InicioCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 standard-image"
                    src={TransporteTerreste}
                    alt="Imagen 1"
                />
                <Carousel.Caption className="caption-left">
                    <h3>Servicio de transporte<br></br>Terrestre</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 standard-image"
                    src={TransporteMaritimo}
                    alt="Imagen 2"
                />
                <Carousel.Caption className="caption-left">
                    <h3>Servicio de tranporte <br></br>Marítimo</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default InicioCarousel;
