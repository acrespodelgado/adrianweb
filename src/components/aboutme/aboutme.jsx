import React, { useEffect, useState } from 'react';
import './aboutme.scss';
import '../../sass/animations.scss';

export default function AboutMe() {
    const certifications = [
        {
            name: 'Graduado en Ingeniería Informática (UCA - 2025)',
            description: 'TIC - Matrícula de honor en TFGM'
        },
        {
            name: 'Graduado en CFGS DAM  (Cádiz) - 2016',
            description: 'FP Dual Befresh SL, Salesianos.'
        },
        {
            name: 'Nivel C1 Inglés',
            description: 'Certificado por APTIS ESOL.'
        },
        {
            name: 'Certificaciones CISCO',
            description: ['CCNP, CCNAV2 (UCA) y CCNAV1 (Salesianos)', 'Linux Essentials (Salesianos)'] 
        },
        {
            name: 'Piloto drones A1/A3',
            description: 'Certificado por AESA.'
        }
    ];

    const [stage, setStage] = useState(0);
    const [ended, setEnded] = useState({
        h1: false,
        h2left: false,
        h2right: false
    });

    useEffect(() => {
        const timers = [];

        timers.push(setTimeout(() => setStage(1), 300)); // h1
        timers.push(setTimeout(() => setEnded(prev => ({ ...prev, h1: true })), 3300));

        timers.push(setTimeout(() => setStage(2), 3600)); // h2 izquierdo
        timers.push(setTimeout(() => setEnded(prev => ({ ...prev, h2left: true })), 6600));

        timers.push(setTimeout(() => setStage(3), 6900)); // h2 derecho
        timers.push(setTimeout(() => setEnded(prev => ({ ...prev, h2right: true })), 9900));

        timers.push(setTimeout(() => setStage(4), 10200)); // ul
        timers.push(setTimeout(() => setStage(5), 10200)); // certificados

        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <section className="onPage" id="sobre-mi">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        {stage >= 1 && (
                            <h1 className={`typewriter-left ${ended.h1 ? 'ended' : ''}`}>
                                ¿Quién soy?
                            </h1>
                        )}
                    </div>

                    <div className="col-12 col-lg-6">
                        {stage >= 2 && (
                            <h2 className={`typewriter-left aboutme-title ${ended.h2left ? 'ended' : ''}`}>
                                Me llamo Adrián Crespo Delgado
                            </h2>
                        )}
                        {stage >= 4 && (
                            <ul className="fade-in">
                                <li>Soy Graduado en el Grado de Ingeniería Informática.</li>
                                <li>También soy graduado en el Ciclo Formativo de Grado Superior de DAM.</li>
                                <li>Estudié Ingeniería de Software, pero decidí cambiar mi enfoque y estudiar Ing. Informática general.</li>
                                <li>Me encanta aprender nuevas tecnologías, por lo que no tengo problema en adaptarme en cualquier proyecto.</li>
                                <li>Tengo experiencia en trabajo en solitario principalmente, aunque he trabajado durante más de 2 años en proyectos grupales.</li>
                                <li>Realizo impresión 3D y diseño de piezas, soy un apasionado de la informática y me encanta la tecnología en general.</li>
                            </ul>
                        )}
                    </div>

                    <div className="col-12 col-lg-6 text-right">
                        {stage >= 3 && (
                            <h2 className={`typewriter-right cert-title ${ended.h2right ? 'ended' : ''}`}>
                                <a href="https://drive.google.com/drive/folders/1ShWTRKOzpVQ1xDgKVfwj2NC8fzbuzMOr?usp=drive_link" target="_blank">
                                    Certificaciones
                                </a>
                            </h2>        
                        )}
                        {stage >= 5 && (
                            <ul className="fade-in cert-list">
                                {certifications.map((cert, index) => (
                                    <li className="fade-in-right" key={index} style={{ animationDelay: `${index * 100}ms` }}>
                                        <span>{cert.name}</span>
                                        {Array.isArray(cert.description) ? (
                                            cert.description.map((line, i) => (
                                                <span className="sub-description" key={i}>{line}</span>
                                            ))
                                        ) : (
                                            <span className="sub-description">{cert.description}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}