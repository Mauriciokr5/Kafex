import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import camion from '../images/TrailerpngIndex.png';

const Objetivo = () => {


    return (
        <div className='containerFirma' id='Firma'>
            <div className="d-flex align-items-center overlayFirma">
                <Container>
                    <Row>
                        <Col lg={{ span: 5, offset: 2 }} className="order-lg-2 d-flex align-items-center justify-content-center ">
                            <img className="logofirma" src={camion} alt="Logo" ></img>
                        </Col>
                        <Col lg={5} className='order-lg-1 d-flex align-items-end containerText'>
                            <div className='backFirma'>
                                <p>
                                    Dedicados en brindar un servicio de <strong>Transportación</strong> y <strong>Logística</strong> formando parte de un grupo corporativo de empresas exitosas en su ramo. ​
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
