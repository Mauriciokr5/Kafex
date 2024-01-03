import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoBlanco from '../images/kafex-logoblanco.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {

    return (

        <header className="container">
                <Navbar expand="lg" className="header">
                    <Link to="/" className="navbar-brand">
                        <img src={logoBlanco} alt="Logo" className="logo" ></img>
                    </Link>
                    <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" />
                    <Navbar.Collapse id="navbar-nav" className="justify-content-end ">
                        <Nav className="ml-auto nav-options">
                            <Link to="/" className="nav-link">Inicio</Link>
                            <Link to="/acerca-nosotros" className="nav-link">Acerca de nosotros</Link>
                            <Link to="/Especialidades" className="nav-link">Servicios</Link>
                            <Link to="/#Contacto" className="nav-link">Contacto</Link>
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>
        </header>
    );
};

export default Header;
