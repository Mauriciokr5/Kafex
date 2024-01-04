import React, { useState } from 'react';
import Header from './Header';
import bannerServicios from '../images/BannerServicios.mp4';
import loadingImage from '../images/BannerServiciosLoading.jpg';
import separadorVid from '../images/ServiciosSeparador1.mp4';
import { Nav, Container, Row, Col, Carousel } from 'react-bootstrap';
import image1 from '../images/ServicioTerrestre.jpg';
import image2 from '../images/ServicioMaritimo.jpg';
import CardCarousel from './CardCarousel';
import Especialidades from './Especialidades';


const Servicios = () => {

    const [bannerLoaded, setBannerLoaded] = useState(false);
    const [activeItem, setActiveItem] = useState('Tipos de servicio');

    const handleItemClick = (name, id) => () => {
        setActiveItem(name);
        scrollTo(id);
    };

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const onBannerLoad = () => {
        setBannerLoaded(true);
    };

    return (
        <div className="acerca-nosotros">

            <div className='header-combinado-container'>
                {!bannerLoaded && (
                    <img src={loadingImage} alt="Cargando video..." className="header-combinado-video" />
                )}
                <video autoPlay loop muted className='header-combinado-video' onLoadedData={onBannerLoad}>
                    <source src={bannerServicios} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Header />
                <div className="texto-encima header-combinado-main-title">
                    <p>SERVICIOS</p>
                </div>
            </div>

            <Container >
                <Row>
                    <Col lg={3} className="pro-sidebar text-boton">
                        <Nav className="flex-column" variant="pills" defaultActiveKey="#tipos-servicio">
                            <Nav.Link
                                className={`menu-item ${activeItem === 'Tipos de servicio' ? 'menu-item-active' : ''}`}
                                onClick={handleItemClick('Tipos de servicio', 'tipos-servicio')}
                            >Tipos de servicio</Nav.Link>
                            <Nav.Link
                                className={`menu-item ${activeItem === 'Modalidades de servicio' ? 'menu-item-active' : ''}`}
                                onClick={handleItemClick('Modalidades de servicio', 'modalidades-servicio')}
                            >Modalidades de servicio</Nav.Link>
                            <Nav.Link
                                className={`menu-item ${activeItem === 'Seguimiento' ? 'menu-item-active' : ''}`}
                                onClick={handleItemClick('Seguimiento', 'seguimiento')}
                            >Seguimiento</Nav.Link>
                            <Nav.Link
                                className={`menu-item ${activeItem === 'Otros' ? 'menu-item-active' : ''}`}
                                onClick={handleItemClick('Otros', 'otros')}
                            >Otros</Nav.Link>
                        </Nav>

                    </Col>

                    <Col lg={9} className='main-content'>
                        <div className="main-content">
                            <section id="tipos-servicio" className="tipos-servicio-section">
                                <div className="tipos-servicio-content">
                                    <div>
                                        <h2 className="tipos-servicio-title">Tipos de servicio</h2>
                                        <p className="tipos-servicio-text">
                                            Corporativo KAFEX brinda un servicio de Transportación y Logística a nivel Nacional e Internacional:
                                        </p>
                                    </div>
                                    <div>
                                        <Carousel className="tipos-servicio-carousel">
                                            <Carousel.Item>
                                                <img
                                                    className="carousel-tipos-servicios-image d-block w-100"
                                                    src={image1}
                                                    alt="Servicio terrestre"
                                                />
                                                <Carousel.Caption>
                                                    <h3 className='carousel-tipos-servicio-titulo'>Servicio terrestre</h3>
                                                    <p className='carousel-tipos-servicio-texto'>Las rutas que en la actualidad manejamos son las siguientes: Estados Unidos, Canadá, Centro y Sudamérica.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="carousel-tipos-servicios-image d-block w-100"
                                                    src={image2}
                                                    alt="Servicio marítimo"
                                                />
                                                <Carousel.Caption>
                                                    <h3 className='carousel-tipos-servicio-titulo'>Servicio marítimo</h3>
                                                    <p className='carousel-tipos-servicio-texto'>Manejamos los diferentes puertos: Veracruz, Altamira, Lázaro Cárdenas, Manzanillo, puerto Progreso. En las diferentes modalidades conocidas, (exportaciones, importaciones en servicios dedicados y LTLT.)</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                    <div>
                                        <p className="tipos-servicio-text">
                                            De la misma forma ofrecemos Despachos Aduanales y servicios de comercializadora en nuestros diferentes puertos.
                                        </p>
                                    </div>
                                    <div className='video-separado-container'>
                                        <video autoPlay loop muted className='video-separado-servicios'>
                                            <source src={separadorVid} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        <div>
                                            <p className='texto-encima-video-separador'>El servicio de transporación para ti</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="modalidades-servicio" className='modalidades-servicio-section'>
                                <div className='modalidades-servicio-title'>
                                    <h2>Modalidades de servicio</h2>
                                </div>
                                <div>
                                    <p className='modalidades-servicio-text'>
                                        Las diferentes modalidades de transporte que en la actualidad ofrecemos:
                                    </p>
                                </div>
                                <div>
                                    <Especialidades />
                                </div>
                            </section>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Servicios;