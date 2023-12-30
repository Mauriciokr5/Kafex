import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/logo.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

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
                            <Nav.Link href="#Firma">Acerca de nosotros</Nav.Link>
                            <Nav.Link href="#Especialidades">Servicios</Nav.Link>
                            <Nav.Link href="#Contacto">Contacto</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>
            </div>

        </header>
    );
};

export default Header;
