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
            <div className="home-background-overlay d-flex align-items-center">
                <Container className=''>
                    <Row>
                        <Col lg={6}>
                            <h1 className='header-combinado-main-title'>EL SERVICIO DE TRANSPORTACIÓN PARA TI</h1>
                            <Button onClick={() => scrollTo('Contacto')} className='home-btn'>Contáctanos</Button>

                        </Col>
                    </Row>

                </Container>

            </div>


    );
};

export default Home;