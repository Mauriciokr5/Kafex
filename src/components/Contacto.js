import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Toast } from 'react-bootstrap';
import garperfirma from '../images/garperfirma.jpg';
import axios from 'axios';

const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('success'); // 'success' o 'danger'

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `https://docs.google.com/forms/d/e/1FAIpQLSf2nP-O-Agv3cDRYTEYsHoVYYkdj7edr8ej7juzKJFy548pAw/formResponse?entry.117229671=${encodeURIComponent(nombre)}&entry.1970792112=${encodeURIComponent(correo)}&entry.61613825=${encodeURIComponent(telefono)}&entry.1932001063=${encodeURIComponent(mensaje)}`;
        setShowAlert(true);
        setAlertType('success');
        setAlertMessage('Formulario enviado exitosamente');

        try {
            await axios.post(url);
            
            handleCloseWithAnimation();
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            // setShowAlert(true);
            // setAlertType('danger');
            // setAlertMessage('Error al enviar el formulario. Inténtelo de nuevo.');
        }

        setNombre('');
        setCorreo('');
        setTelefono('');
        setMensaje('');
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const containerStyle = {
        backgroundImage: `url(${garperfirma})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        position: 'relative', // Asegura que el contenedor sea relativo para posicionar elementos hijos

    };

    return (
        <div style={containerStyle} className='containerStyleContacto' id='Contacto'>
            <Container>
                <Row className='rowStyleContacto'>
                    <Col md={6} className='backContacto'>
                        <div >
                            <h1>Contacto</h1>
                            <p>Tel: <a className="cont" href="tel:+525545025100" >+525545025100</a></p>
                            <p>Email: <a className="cont" href="mailto:contacto.garper@gmail.com" >contacto.garper@gmail.com</a></p>
                        </div>

                        {/* <div style={{ position: 'relative', width: '100%', paddingTop: '50%' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.9153723849391!2d-99.2323235242238!3d19.383804761036043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201ab038aed8d%3A0x93116e55ccf6fc62!2sPaso%20De%20La%20Laja%202%2C%20La%20Mexicana%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001260%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1691266179601!5m2!1ses-419!2smx"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div> */}
                    </Col>
                    <Col md={{ span: 6, offset: 0 }} className='backForm'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="nombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese su nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="correo">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingrese su correo electrónico"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="telefono">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Ingrese su teléfono"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="mensaje">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Escriba su mensaje"
                                    value={mensaje}
                                    onChange={(e) => setMensaje(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button type="submit" className='btnContacto'>
                                Enviar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Toast
                show={showAlert}
                onClose={handleCloseAlert}
                delay={3000}
                autohide
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    minWidth: '250px',
                }}
                className={`bg-${alertType} text-white`}
            >
                <Toast.Body>{alertMessage}</Toast.Body>
            </Toast>
        </div>
    );
};

export default Contacto;
