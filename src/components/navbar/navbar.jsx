import React from 'react'
import './navbar.scss'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img src="" alt="Logo Adrián" />
            <ul className="nav-menu">
                <li>Sobre mí</li>
                <li>Experiencia</li>
                <li>Frameworks</li>
                <li>Certificaciones</li>
                <li>Proyectos</li>
                <li>Contacto</li>
            </ul>
        </nav>
    );
}

