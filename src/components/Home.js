import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';

import logoCompleto from '../images/logoCompleto.png';

const Home = () => {
    // const containerStyle = {
    //     backgroundImage: `url(${garperhome})`
    // };

    return (
        
            <div className="overlayHome d-flex align-items-center">
                <Container>
                    {/* <img className="mainLogo" src={logoCompleto} alt="Logo" ></img> */}
                    <Row>
                        <Col lg={6}>
                            <h1 className='mainTitle'>EL SERVICIO DE TRASNPORTACIÓN PARA TI​</h1>
                            <Button href='#Contacto' className='btnHome'>Cotizar</Button>
                        </Col>
                    </Row>

                </Container>

            </div>


    );
};

export default Home;