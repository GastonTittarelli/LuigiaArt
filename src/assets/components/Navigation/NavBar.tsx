import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./nav.scss";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();
    const navRef = useRef<HTMLElement>(null);
    const [useTransition, setUseTransition] = useState(false);

    const toggleNav = () => {
        setUseTransition(true);
        setIsActive(!isActive);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node) && !event.composedPath().includes(document.querySelector('.boton') as Node)) {
            
            setIsActive(false);
        }
    };

    // Efecto para detectar cambios de ruta y cerrar el nav
    useEffect(() => {
        setUseTransition(false);
        setIsActive(false);
    }, [location]);

    // Efecto para manejar clics fuera del nav
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Efecto para manejar el botón de "atrás"
    useEffect(() => {
        const handlePopState = () => {
            
            setIsActive(false);
    };
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
        }, []);


    return (

        <>
            <button className="boton" onClick={toggleNav}>
                <img className="menu" src="../../../img/menuH/menuH1.png" alt="imagen de menu" />
            </button>
        
            <nav ref={navRef} className={`nav ${isActive ? 'activo' : ''} ${useTransition ? 'transition' : ''}`}>
            <ul>
                <Link to="/">
                    <li>Inicio</li>
                </Link>

                <Link  to="/about">
                    <li>Acarca de mi</li>
                </Link>

                <Link  to="/gallery">
                    <li>Galería</li>
                </Link>

                <Link  to="/virtual">
                    <li>Exposición virtual</li>
                </Link>
            </ul>
        </nav>
        </>
    )
}

export default Nav