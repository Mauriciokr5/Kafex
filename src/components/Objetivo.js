import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import camion from '../images/camion.png';

const Objetivo = () => {

    // const containerStyle = {
    //     // backgroundImage: `url(${garperfirma})`,
    //     backgroundColor:'#b18d57',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center center',
    //     position: 'relative', // Asegura que el contenedor sea relativo para posicionar elementos hijos
    //     minHeight: '70vh', // Altura de la ventana visible, ajusta según sea necesario
        
    // };


    return (
        <div className='containerFirma' id='Firma'>
            <div className="d-flex align-items-center overlayFirma">
                <Container>
                    <Row>
                        <Col lg={{ span: 5, offset: 0 }} className="order-lg-2 d-flex align-items-center justify-content-center ">
                            <img className="logofirma" src={camion} alt="Logo" ></img>
                        </Col>
                        <Col lg={7} className='order-lg-1 containerText'>
                            <div className='backFirma'>
                                <p>
                                    Dedicados en brindar un servicio de Transportación y Logística formando parte de un grupo corporativo de empresas exitosas en su ramo. ​
                                </p>
                            </div>

                        </Col>

                    </Row>
                </Container>

            </div>

        </div>

    );
};

export default Objetivo;
