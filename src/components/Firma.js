import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logoCompletoNegro from '../images/logoCompletoNegro.png';
import garperfirma from '../images/garperfirma.jpg';

const Firma = () => {

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
                            <img className="logofirma" src={logoCompletoNegro} alt="Logo" ></img>
                        </Col>
                        <Col lg={7} className=' order-lg-1 containerText'>
                            <div className='backFirma '>
                                <h1>Nuestra firma</h1>
                                <p>
                                    Con orgullo, nos presentamos como una destacada firma de abogados especializados en diversas ramas del derecho, comprometida con la excelencia en cada aspecto de nuestros servicios. Nuestra trayectoria es un testimonio de los valores fundamentales que nos guían: ética inquebrantable, vasta experiencia y un nivel insuperable de profesionalismo. Cada uno de nuestros miembros es un reflejo de estos principios, llevando consigo el estandarte de integridad y dedicación en cada caso que abordamos.
                                </p>
                                <p>
                                    En un mundo jurídico en constante evolución, reconocemos la importancia de la actualización continua. Es por eso que invertimos en la formación académica constante de nuestros abogados, manteniéndonos al tanto de los cambios legislativos y tendencias emergentes. Esta búsqueda constante de conocimiento nos permite abordar cada asunto con una perspectiva informada y soluciones innovadoras.
                                </p>
                                {/* <p>
                                    Entendemos que cada cliente es único, con necesidades y desafíos específicos. Es por ello que nos esforzamos por brindar un enfoque personalizado a cada caso. Nuestro compromiso no se limita únicamente a ofrecer asesoramiento legal, sino también a proporcionar la tranquilidad que nuestros clientes necesitan durante todo el proceso. Somos conscientes de las demandas y expectativas de nuestros clientes, y trabajamos incansablemente para superarlas en cada paso del camino.
                                </p>
                                <p>
                                    La confianza que depositan en nosotros nuestros clientes es nuestra mayor recompensa. Nos enorgullecemos de ser sus aliados en la búsqueda de justicia y soluciones legales efectivas. Con cada nuevo desafío, renovamos nuestro compromiso de servir con pasión, inteligencia y compromiso. Juntos, enfrentamos las exigencias cambiantes del mundo legal, estableciendo estándares más altos y alcanzando resultados excepcionales.
                                </p> */}
                            </div>

                        </Col>

                    </Row>
                </Container>

            </div>

        </div>

    );
};

export default Firma;
