import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Toast } from 'react-bootstrap';
import { IoIosPin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

import axios from 'axios';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        mensaje: '',
    });

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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const containerStyle = {
        backgroundImage: `url()`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        position: 'relative', // Asegura que el contenedor sea relativo para posicionar elementos hijos

    };

    return (
        <div style={containerStyle} className='containerStyleContacto' id='Contacto'>

            <Container>
                <Row>

                    <Col lg={{ span: 4, offset: 1 }}>
                        <h2>Obtén una cotización adecuada a sus necesidades</h2>
                        <br></br>
                        <p>
                            <IoIosPin /> &nbsp;&nbsp;&nbsp;Plazuela 1 de plaza del Carmen, manzana 29, lote 14, plazas de Aragón.
                        </p>
                        <br></br>
                        <IoIosMail />
                        &nbsp;&nbsp;&nbsp;
                        <a href="mailto:operaciones@corporativofax.com.mx">
                            operaciones@corporativofax.com.mx
                        </a>

                    </Col>
                    <Col lg={{ span: 5, offset: 1 }} className="containerForm">
                        <br></br>
                        
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type="text" className="form-control" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} required />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="apellido">Apellido</label>
                                        <input type="text" className="form-control" name="apellido" id="apellido" value={formData.apellido} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="correo">Correo</label>
                                        <input type="email" className="form-control" name="correo" id="correo" value={formData.correo} onChange={handleChange} required />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="telefono">Teléfono</label>
                                        <input type="tel" className="form-control" name="telefono" id="telefono" value={formData.telefono} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mensaje">Mensaje</label>
                                    <textarea className="form-control" name="mensaje" id="mensaje" value={formData.mensaje} onChange={handleChange} required rows="3"></textarea>
                                </div>
                                <div className="">
                                    <button type="submit" className="btn btn-primary btnContacto">Enviar</button>
                                </div>
                            </form>

                        
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
