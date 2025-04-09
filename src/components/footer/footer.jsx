import React from 'react'
import './footer.scss'

export default function Footer() {
    const navItems = ['Proyectos'];
    const navItemsFinal = ['Linkedin'];

    return (
        <footer className="footer fixed-bottom">
            <div className="container-fluid">

                <div className="footer-contact d-flex flex-column">
                    <h3>¿Te interesa mi perfil?</h3>
                    <a href="#contacto" className="d-flex align-items-center gap-4">
                        <p className="mb-0">Contáctame</p>
                        <i className="fa-solid fa-arrow-right arrow-bounce"></i>
                    </a>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">©{new Date().getFullYear()} Adrián Crespo Delgado</p>

                    <ul className="footer-nav d-flex gap-3 mb-0">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <a href={`#${item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").toLowerCase()}`} className="nav-link">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <ul className="footer-nav d-flex gap-3 ms-auto mb-0">
                        {navItemsFinal.map((item, index) => (
                            <li key={index} className="nav-item">
                                <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} className="nav-link">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
