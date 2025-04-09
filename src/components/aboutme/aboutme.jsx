import React, { useEffect, useState } from 'react';
import './aboutme.scss';
import '../../sass/animations.scss';

export default function AboutMe() {
    const technologies = [
        {
            name: 'PHP',
            description: 'Proyectos con Laravel, Wordpress, Symfony, CodeIgniter y nativo.'
        },
        {
            name: 'Java',
            description: 'Aplicación en Android, proyectos didácticos con Spring.'
        },
        {
            name: 'Python',
            description: 'Scripts para uso personal, proyectos didácticos con Django.'
        },
        {
            name: 'JavaScript',
            description: 'Proyecto TFGM en Vue.js, Jquery, proyecto web en Angular y NodeJS, web personal en ReactJS.'
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
        timers.push(setTimeout(() => setStage(5), 11200)); // tecnologías

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
                            <h2 className={`typewriter-left ${ended.h2left ? 'ended' : ''}`}>
                                Me llamo Adrián Crespo Delgado
                            </h2>
                        )}
                        {stage >= 4 && (
                            <ul className="fade-in">
                                <li>Soy Graduado en el Grado de Ingeniería Informática (UCA - 2025).</li>
                                <li>También soy graduado en el Ciclo Formativo de Grado Superior de DAM, en Salesianos (Cádiz - 2017).</li>
                                <li>Estudié Ingeniería de Software (Sevilla - 2013), pero decidí cambiar mi enfoque y estudiar Ing. Informática general.</li>
                                <li>Me encanta aprender nuevas tecnologías, por lo que no tengo problema en adaptarme en cualquier proyecto.</li>
                                <li>Hablo español de forma nativa e inglés (C1).</li>
                                <li>Tengo experiencia en trabajo en solitario principalmente, aunque he trabajado durante más de 2 años en proyectos grupales.</li>
                                <li>Realizo impresión 3D y diseño de piezas, soy un apasionado de la informática y me encanta la tecnología en general.</li>
                            </ul>
                        )}
                    </div>

                    <div className="col-12 col-lg-6 text-right">
                        {stage >= 3 && (
                            <h2 className={`typewriter-right ${ended.h2right ? 'ended' : ''}`}>
                                Mi experiencia en tecnologías
                            </h2>
                        )}
                        {stage >= 5 && technologies.map((tech, index) => (
                            <div className="tech-section fade-in-right" key={index} style={{ animationDelay: `${index * 300}ms` }}>
                                <h3>{tech.name}</h3>
                                <p>{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}