import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/logo.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {

    return (

        <header className="container">
            <div className="container">
                <Navbar expand="lg" className={'header'}>
                    <Navbar.Brand href="#home" className="">
                        <img src={logo} alt="Logo" className="logo" ></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" />
                    <Navbar.Collapse id="navbar-nav" className="justify-content-end ">
                        <Nav className="ml-auto navoptions">
                            <Link to="/" className="nav-link">Inicio</Link>
                            <Link to="/acerca-nosotros" className="nav-link">Acerca de nosotros</Link>
                            <Link to="/Especialidades" className="nav-link">Servicios</Link>
                            <Link to="/Contacto" className="nav-link">Contacto</Link>
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>
            </div>

        </header>
    );
};

export default Header;
