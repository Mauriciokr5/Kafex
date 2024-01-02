import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../images/kafex-logoblanco.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 footerStyle">
            <Container>
                <Row>
                    <Col md={5} className="mb-4">
                        <img src={logo} alt="Logo" className="footerLogo" ></img>
                    </Col>
                    <Col lg={4} className="footercontacto">
                        <h5>Contactanos</h5>
                        <p><FaEnvelope size={30} className="mr-3 text-golden" /> 
                        <a className="cont" href="mailto:corporativo@corporativokafex.com.mx">corporativo@corporativokafex.com.mx</a>
                        </p>
                        <p><FaEnvelope size={30} className="mr-3 text-golden" /> 
                        <a className="cont" href="mailto:operaciones@corporativokafex.com.mx ">operaciones@corporativokafex.com.mx </a>
                        </p>
                        <p> <FaPhone size={30} className="mr-3 text-golden" />
                        Tel. <a className="cont" href="tel:+525519341169" >55 19 34 11 69</a></p>
                        
                    </Col>
                    <hr className='hidehrfooter'></hr>
                    <Col lg={{ span: 2, offset: 1 }} className='footerSocialMediaNav'>
                        <div className="footernav">
                        <p><FaMapMarkerAlt size={30} className="mr-3 text-golden" /> 
                        Plazuela 1 de Plaza del Carmen, Manzana 29, Lote 14, Plazas de Aragón
                        </p>
                        </div>
                    {/* No nos dieron redes sociales 
                        <div className='footerSocialMedia'>
                            <a href="https://www.facebook.com/profile.php?id=100082983979507" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} className="mr-3 text-golden" />
                            </a>
                            <a href="https://www.instagram.com/garper.oficial/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} className="mr-3 text-golden" />
                            </a>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
