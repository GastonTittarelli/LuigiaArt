import { useState, useEffect } from 'react';
import AcercaDeSmall from './presentacion2Small.tsx';
import AcercaDeLarge from './presentacion2Large.tsx';

const AcercaDe: React.FC = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 700);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isSmallScreen ? <AcercaDeSmall /> : <AcercaDeLarge />}
        </>
    );
}

export default AcercaDe;
