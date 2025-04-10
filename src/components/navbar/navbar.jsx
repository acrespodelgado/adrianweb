import React from 'react'
import './navbar.scss'
import logo from '../../assets/logo.png'
import Hamburger from './hamburger';

export default function Navbar() {
    const navItems = ['Sobre mí', 'Experiencia', 'Proyectos', 'Contacto'];

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a href="#" className="navbar-brand" aria-label="Inicio">
                    <img src={logo} alt="Logo AC" className="logo" />
                </a>
                <Hamburger />
                <div className="collapse navbar-collapse" id="collapsable">
                    <ul className="navbar-nav">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <a href={`#${item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").toLowerCase()}`} className="nav-link">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}