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

    // Efecto para detectar cambios de ruta y cerrar el menú
    useEffect(() => {
        setUseTransition(false);
        setIsActive(false);
    }, [location]);

    // Manejar clicks fuera del menú
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Manejar el botón de "atrás" en mobile
    useEffect(() => {
        const handlePopState = () => {
            
            setIsActive(false);
    };
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
        }, []);


        const isActiveLink = (path: string) => {
            return location.pathname === path || (path !== '/' && location.pathname.startsWith(path)) ? 'active' : '';
        };

    return (
        <>
            <button className="boton" onClick={toggleNav}>
                <img className="menu" src="../../../img/menuH/menuH1.png" alt="imagen de menu" />
            </button>
        
            <nav ref={navRef} className={`nav ${isActive ? 'activo' : ''} ${useTransition ? 'transition' : ''}`}>
                <ul>
                    <Link to="/">
                        <li className={isActiveLink('/')}>Inicio</li>
                    </Link>

                    <Link  to="/about">
                        <li className={isActiveLink('/about')}>Acerca de mi</li>
                    </Link>

                    <Link to="/gallery">
                            <li className={isActiveLink('/gallery')}>Galería</li>
                        </Link>

                        <Link to="/virtual">
                            <li className={isActiveLink('/virtual')}>Exposición virtual</li>
                        </Link>
                </ul>
            </nav>
        </>
    )
}

export default Nav