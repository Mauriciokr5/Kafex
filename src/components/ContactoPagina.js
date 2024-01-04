import React, { useState } from 'react';
import { Col, Container, Row, Toast } from 'react-bootstrap';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import BannerIndex from '../images/BannerIndex.mp4';
import logo from '../images/kafex-logo.png';
import imageLoading from '../images/BannerIndexLoading.jpg';

const ContactoPagina = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        mensaje: '',
    });
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('success'); // 'success' o 'danger'

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const url = `https://docs.google.com/forms/d/e/1FAIpQLSf2nP-O-Agv3cDRYTEYsHoVYYkdj7edr8ej7juzKJFy548pAw/formResponse?entry.117229671=${encodeURIComponent(nombre)}&entry.1970792112=${encodeURIComponent(correo)}&entry.61613825=${encodeURIComponent(telefono)}&entry.1932001063=${encodeURIComponent(mensaje)}`;
        const url = ``;
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

    const onVideoLoad = () => {
        setVideoLoaded(true);
    };

    return (
        <div className='header-combinado-container'>
            {!videoLoaded && (
                <img src={imageLoading} alt="Cargando video..." className="header-combinado-video" />
            )}
            <video autoPlay loop muted className='header-combinado-video' onLoadedData={onVideoLoad}>
                <source src={BannerIndex} type="video/mp4" />
                El navegador no soporta video.
            </video>
            <Container>
                <Row>
                    <Col lg={{ span: 2, offset: 0 }} xs={{ span: 6, offset: 0 }}>
                        <Link to="/" ><IoIosArrowBack className='contacto-pagina-flecha' /></Link>
                    </Col>
                    <Col lg={{ span: 2, offset: 0 }} xs={{ span: 6, offset: 0 }} className='order-lg-2'>
                        <img src={logo} alt="Logo" className="logo" style={{ width: '150px', float: 'right' }}></img>
                    </Col>
                    <Col lg={{ span: 8, offset: 0 }} xs={{ span: 12, offset: 0 }} className="contacto-pagina-container order-lg-1">
                        <h1 className='contacto-pagina-titulo'>Cotización</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="nombre" className='contacto-label'>Nombre</label>
                                    <input type="text" className="form-control" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} required />
                                </div>
                                <div className="col">
                                    <label htmlFor="apellido" className='contacto-label'>Apellido</label>
                                    <input type="text" className="form-control" name="apellido" id="apellido" value={formData.apellido} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="correo" className='contacto-label'>Correo</label>
                                    <input type="email" className="form-control" name="correo" id="correo" value={formData.correo} onChange={handleChange} required />
                                </div>
                                <div className="col">
                                    <label htmlFor="telefono" className='contacto-label'>Teléfono</label>
                                    <input type="tel" className="form-control" name="telefono" id="telefono" value={formData.telefono} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mensaje" className='contacto-label'>Mensaje</label>
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

export default ContactoPagina;
