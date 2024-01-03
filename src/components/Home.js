import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';


const Home = () => {

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
      

    return (
            <div className="overlayHome d-flex align-items-center">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h1 className='mainTitle'>EL SERVICIO DE TRASNPORTACIÓN PARA TI</h1>
                            <Button onClick={() => scrollTo('Contacto')} className='btnHome'>Cotizar</Button>

                        </Col>
                    </Row>

                </Container>

            </div>


    );
};

export default Home;