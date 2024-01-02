import React, { useState } from 'react';
import bannerAcercadeNosotros from '../images/BannerAcercadeNosotros.mp4';
import image1 from '../images/1AcercaDeNosotros.jpg';
import image2 from '../images/2AcercaDeNosotros.jpg';
import image3 from '../images/3AcercaDeNosotros.jpg';
import { Nav, Container, Row, Col, Carousel } from 'react-bootstrap';

const AcercaNosotros = () => {

    const [activeItem, setActiveItem] = useState('¿Quienes somos?');
    const handleItemClick = (name) => () => {
        setActiveItem(name);
    };

    return (
      <div className="acerca-nosotros">
        <div className='containerStyleHome'>
          <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
            <source src={bannerAcercadeNosotros} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="texto-encima mainTitle">
            <p>ACERCA DE NOSOTROS</p>
          </div>
        </div >
        
        <Container >
            <Row>
            <Col lg={3} className="pro-sidebar text-boton">
            <Nav className="flex-column" variant="pills" defaultActiveKey="#quienes-somos">
                <Nav.Link 
                  href="#quienes-somos" 
                  className={`menu-item ${activeItem === '¿Quienes somos?' ? 'menu-item-active' : ''}`} 
                  onClick={handleItemClick('¿Quienes somos?')}
                >¿Quienes somos?</Nav.Link>
                <Nav.Link 
                  href="#mision" 
                  className={`menu-item ${activeItem === 'Misión' ? 'menu-item-active' : ''}`}
                  onClick={handleItemClick('Misión')}
                >Misión</Nav.Link>
                <Nav.Link 
                  href="#vision" 
                  className={`menu-item ${activeItem === 'Visión' ? 'menu-item-active' : ''}`}
                  onClick={handleItemClick('Visión')}
                >Visión</Nav.Link>
                <Nav.Link 
                  href="#valores" 
                  className={`menu-item ${activeItem === 'Valores' ? 'menu-item-active' : ''}`}
                  onClick={handleItemClick('Valores')}
                >Valores</Nav.Link>
                <Nav.Link 
                  href="#principios" 
                  className={`menu-item ${activeItem === 'Principios' ? 'menu-item-active' : ''}`}
                  onClick={handleItemClick('Principios')}
                >Principios</Nav.Link>
                <Nav.Link 
                  href="#organigrama" 
                  className={`menu-item ${activeItem === 'Organigrama' ? 'menu-item-active' : ''}`}
                  onClick={handleItemClick('Organigrama')}
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
                        <section id="quienes-somos">
                        <h2>¿Quiénes somos?</h2>
                        <p>
                        Corporativo Kafex, es una Empresa dedicada en brindar un servicio de Transportación y Logística Marítima Terrestre, y aérea ofreciéndole un servicio Integral logístico de su mercancía en trayecto, a nivel
                        Nacional e Internacional, formando parte de un grupo corporativo de empresas exitosas en su ramo. Las rutas que en la actualidad manejamos son las siguientes: Estados Unidos, Canadá, Centro y Sudamérica. (Como Servicio Terrestre)
                        La empresa se creó el 19 de noviembre del 2019, realizando mas de 10 mil viajes en todo lo que lleva de su existencia
                        </p>
                        </section>
                        <section id="mision">
                        <h2>Misión</h2>
                        <p>
                        Corporativo Kafex fue creada con la finalidad de ofrecer a todos nuestros clientes un servicio integral en el comercio interior y exterior, teniendo como objetivo principal, que nuestros clientes siempre salgan beneficiados tanto competitividad de nuestras tarifas, como con la eficiencia de nuestros servicios. 
                        </p>
                        </section>
                        <section id="vision">
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
                        <section id="principios">
                        <h2>Principios</h2>
                        <p>
                        Politica de Calidad
                        Somos un equipo de trabajo cuyas acciones diarias las ejecutamos con una elevada vocación de servicio a los clientes en nuestra visión de empresa de categoría mundial, basadas en los siguientes principios. 

                        Integridad Personal como expresión de disciplina, orden, respeto, honestidad y entusiasmo. 
                        Creatividad e Innovación como parte de nuestro reto diario para el mejoramiento continuo. 
                        Productividad en nuestro trabajo y en el empleo de los recursos materiales. 
                        Conciencia en la práctica de un trabajo libre de errores y en el Compromiso leal con la institución y con las realizaciones de calidad. 
                        </p>
                        </section>
                        <section id="organigrama">
                        <h2>Organigrama</h2>
                        <p>
                        <img src="https://i.ibb.co/1b7j3f6/organigrama.png" alt="Organigrama" border="0"></img>
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