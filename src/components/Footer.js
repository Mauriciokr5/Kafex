import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 footerStyle">
            <Container>
                <Row>
                    <Col md={5} className="mb-4">
                        <img src="" alt="Logo" className="footerLogo" ></img>
                    </Col>
                    <Col lg={4} className="footercontacto">
                        <h5>Contactanos</h5>
                        {/* <p>Paso De La Laja N° 2, La Mexicana, Álvaro Obregón, C.P. 01260, Ciudad de México.</p> */}
                        <p>Tel. <a className="cont" href="tel:+525545025100" >+525545025100</a></p>
                        <p><a className="cont" href="mailto:contacto.garper@gmail.com" >contacto.garper@gmail.com</a></p>
                    </Col>
                    <hr className='hidehrfooter'></hr>
                    <Col lg={{ span: 2, offset: 1 }} className='footerSocialMediaNav'>
                        <div className="footernav">
                            <a href="#Firma">Nuestra firma</a>
                            <a href="#Especialidades">Especialidades</a>
                            <a href="#Clientes">Nuestros clientes</a>
                            <a href="#Contacto">Contacto</a>
                        </div>
                        <div className='footerSocialMedia'>
                            <a href="https://www.facebook.com/profile.php?id=100082983979507" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} className="mr-3 text-golden" />
                            </a>
                            <a href="https://www.instagram.com/garper.oficial/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} className="mr-3 text-golden" />
                            </a>
                        </div>
                    </Col>
                </Row>
                <hr></hr>
                <p className='leyendaDerechos'>©GARPER. Todos los derechos reservados</p>
            </Container>
        </footer>
    );
};

export default Footer;
