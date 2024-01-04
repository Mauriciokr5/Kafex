import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, CardGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardCarousel from './CardCarousel';
import image1 from '../images/ServiciosTransporte1.png';
import image2 from '../images/ServiciosTransporte2.png';
import image3 from '../images/ServiciosTransporte3.png';
import image4 from '../images/ServiciosTransporte4.png';
import image5 from '../images/ServiciosTransporte5.png';
import image6 from '../images/ServiciosTransporte6.png';    
import image8 from '../images/ServiciosTransporte8.png';


const Especialidades = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const cardsPerSlide = screenWidth > 768 ? 4 : 1;
    const cardData = [
        {
            description: 'Cajas secas de y 53´ Importación, exportación Nuevo Laredo, Tamps.',
            imageUrl: image1,
        },
        {
            description: 'Torton',
            imageUrl: image2,
        },
        {
            description: 'Camionetas 3/12 en puertos y frontera Nuevo Laredo',
            imageUrl: image3,
        },
        {
            description: 'Servicio especializado',
            imageUrl: image4,
        },
        {
            description: 'Porta-contenedores en los puertos: Veracruz, Manzanillo, Lázaro Cárdenas, Puerto Progreso y servicios locales en Aduana Pantaco',
            imageUrl: image5,
        },
        {
            description: 'Contenedores de 20’ 40’ DC Y 40’ HC. OPEN TOP, FLAT RACK',
            imageUrl: image6,
        },
        {
            description: 'Servicios consolidados a nivel nacional, importaciones y exportaciones',
            imageUrl: image8,
        },
    ];

    const containerStyle = {
        backgroundColor:'white',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        position: 'relative', // Asegura que el contenedor sea relativo para posicionar elementos hijos
        minHeight: '50vh', // Altura de la ventana visible, ajusta según sea necesario
        
    };

    

    return (
        <div  style={containerStyle} id='Especialidades'>
        <div className='especialidadesSec'>
            <Container >
                <Row>
                    <Col lg={12}>
                        <CardCarousel cardData={cardData} cardsPerSlide={cardsPerSlide} />
                    </Col>

                </Row>


            </Container>
        </div>

        </div>

    );
};

export default Especialidades;