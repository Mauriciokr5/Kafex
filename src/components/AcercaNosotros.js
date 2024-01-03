import React, { useState } from 'react';
import bannerAcercadeNosotros from '../images/BannerAcercadeNosotros.mp4';
import image1 from '../images/1AcercaDeNosotros.jpg';
import image2 from '../images/2AcercaDeNosotros.jpg';
import image3 from '../images/3AcercaDeNosotros.jpg';
import image4 from '../images/TrailerNegroPNG.png';
import image5 from '../images/ImgDerechaAcercaDeNostros.jpg';
import organigrama from '../images/organigrama.png';
import { Nav, Container, Row, Col, Carousel } from 'react-bootstrap';
import Header from './Header';

const AcercaNosotros = () => {

  const [activeItem, setActiveItem] = useState('¿Quienes somos?');
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

  return (
    <div className="acerca-nosotros">
      <div className='containerStyleHome'>
        <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
          <source src={bannerAcercadeNosotros} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Header />
        <div className="texto-encima mainTitle">

          <p>ACERCA DE NOSOTROS</p>
        </div>
      </div >

      <Container >
        <Row>
          <Col lg={3} className="pro-sidebar text-boton">
            <Nav className="flex-column" variant="pills" defaultActiveKey="#quienes-somos">
              <Nav.Link
                className={`menu-item ${activeItem === '¿Quienes somos?' ? 'menu-item-active' : ''}`}
                onClick={handleItemClick('¿Quienes somos?', 'quienes-somos')}
              >¿Quienes somos?</Nav.Link>
              <Nav.Link
                className={`menu-item ${activeItem === 'Misión' ? 'menu-item-active' : ''}`}
                onClick={handleItemClick('Misión', 'mision')}
              >Misión</Nav.Link>
              <Nav.Link
                className={`menu-item ${activeItem === 'Visión' ? 'menu-item-active' : ''}`}
                onClick={handleItemClick('Visión', 'vision')}
              >Visión</Nav.Link>
              <Nav.Link
                className={`menu-item ${activeItem === 'Valores' ? 'menu-item-active' : ''}`}
                onClick={handleItemClick('Valores', 'valores')}
              >Valores</Nav.Link>
              <Nav.Link
                className={`menu-item ${activeItem === 'Principios' ? 'menu-item-active' : ''}`}
                onClick={handleItemClick('Principios', 'principios')}
              >Principios</Nav.Link>
              <Nav.Link
                className={`menu-item ${activeItem === 'Organigrama' ? 'menu-item-active' : ''}`}
                onClick={handleItemClick('Organigrama', 'organigrama')}
              >Organigrama</Nav.Link>
            </Nav>
            <Carousel className="mt-4 sidebar-carousel">
              <Carousel.Item>
                <img className="d-block w-100" src={image1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={image2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={image3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col lg={9}>
            <div className="main-content">
              <section id="quienes-somos" className="quienes-somos-section">
                <div className="quienes-somos-content">
                  <div>
                    <h2 className="quienes-somos-title">¿Quiénes somos?</h2>
                    <p className="quienes-somos-text">
                      Corporativo Kafex, es una Empresa dedicada en brindar un servicio de Transportación y Logística Marítima Terrestre, y aérea ofreciéndole un servicio Integral logístico de su mercancía en trayecto, a nivel
                      Nacional e Internacional, formando parte de un grupo corporativo
                      de empresas exitosas en su ramo. Las rutas que en la actualidad manejamos son las siguientes: Estados Unidos, Canadá, Centro y Sudamérica. (Como <br></br> Servicio Terrestre)
                      <br></br>
                      La empresa se creó el 19 de noviembre del 2019, realizando más de <br></br> 10 mil viajes en todo lo que lleva de su existencia.
                    </p>
                  </div>
                  <Col lg={{ span: 5, offset: 2 }} className="order-lg-2 d-flex align-items-center justify-content-center ">
                    <img src={image4} alt="Transporte" className="quienes-somos-image" />
                  </Col>
                </div>
              </section>
              <section id="mision" className='mision'>
                <h2>Misión</h2>
                <p>
                  Corporativo Kafex fue creada con la finalidad de ofrecer a todos nuestros clientes un servicio integral en el comercio interior y exterior, teniendo como objetivo principal, que nuestros clientes siempre salgan beneficiados tanto competitividad de nuestras tarifas, como con la eficiencia de nuestros servicios.
                </p>
              </section>
              <section id="vision" className='vision'>
                <h2>Visión</h2>
                <p>
                  Ser una empresa líder en nuestro ámbito por la calidad, compromiso y seguridad de nuestros servicios, con una presencia dominante en el mercado, cumpliendo con las normas y estándares aplicables, trascendiendo con la mejor solución en el sector laboral que nos desenvolvemos, como resultado de la satisfacción y confianza de nuestros clientes, generada por la presentación de nuestros servicios.
                </p>
              </section>
              <section id="valores">
                <h2>Valores</h2>
                <p>
                  El profesionalismo de nuestra empresa es generado por un gran trabajo de colaboración de nuestro equipo, basado en la responsabilidad, honestidad y ética, con nuestros clientes, encaminadas a la pro actividad de nuestra vocación de servicio.
                  La calidad de nuestros servicios es el resultado del compromiso, integridad y seguridad con la que trabajamos.
                </p>
              </section>
              <div className='principios-container'>
                <section id="principios" className='principios-section'>
                  <Row>
                    <Col lg={9} className='principios-text-column'>
                      <h2 className='principios-title'>Principios</h2>
                      <p className='principios-text'>
                        <strong>Política de Calidad</strong><br /><br />
                        Somos un equipo de trabajo cuyas <strong>acciones diarias</strong> las ejecutamos con una elevada vocación de servicio a los clientes en nuestra visión de empresa de categoría mundial, basadas en los siguientes principios.<br /><br />
                        <ol>
                          <li><strong>Integridad Personal</strong> como expresión de disciplina, orden, respeto, honestidad y entusiasmo.</li>
                          <li><strong>Creatividad e Innovación</strong> como parte de nuestro reto diario para el mejoramiento continuo.</li>
                          <li><strong>Productividad</strong> en nuestro trabajo y en el empleo de los recursos materiales.</li>
                          <li><strong>Conciencia</strong> en la práctica de un trabajo libre de errores y en el <strong>Compromiso</strong> leal con la institución y con las realizaciones de calidad.</li>
                        </ol>
                      </p>
                    </Col>
                    <Col lg={3} className="d-flex align-items-center justify-content-center">
                      <img src={image5} alt="Principios" className="principios-image" />
                    </Col>
                  </Row>
                </section>
              </div>
              <section id="organigrama">
                <h2>Organigrama</h2>
                <p>
                  <img src={organigrama} alt="Organigrama" border="0"></img>
                </p>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  );
}


export default AcercaNosotros;