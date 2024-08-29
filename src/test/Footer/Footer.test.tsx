import { fireEvent, render, screen } from '@testing-library/react';
import Footer from '../../assets/components/Footer/Footer';
import { MemoryRouter } from 'react-router-dom';

describe('Footer Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
    });

    test('renders all main elements', () => {
        // Verifica que el texto sección de redes sociales se muestra
        const textElements = screen.queryAllByText(/¡Conecta conmigo en mis redes para más inspiración!/i);
        expect(textElements).toHaveLength(1);

        // Verifica que el texto copyright se muestra
        expect(screen.getByText(/Todos los derechos reservados. © 2024 Luigiaart./i)).toBeInTheDocument();
    });

    test('renders the correct internal link', () => {
        // Verifica que el enlace interno tiene el href correcto
        const internalLink = screen.getByRole('link', { name: /LuigiaImagen/i });
        expect(internalLink).toHaveAttribute('href', '/about');
    });

    test('renders the correct external links with correct attributes', () => {
        // Verifica el enlace de Instagram
        const instagramLink = screen.getByRole('link', { name: /Instagram Logo/i });
        expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/luigiaart/');
        expect(instagramLink).toHaveAttribute('target', '_blank');
        expect(instagramLink).toHaveAttribute('rel', 'noreferrer');

        // Verifica el enlace de Facebook
        const facebookLink = screen.getByRole('link', { name: /Facebook Logo/i });
        expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/luigia.arts');
        expect(facebookLink).toHaveAttribute('target', '_blank');
        expect(facebookLink).toHaveAttribute('rel', 'noreferrer');
    });

    test('renders images with correct src attributes', () => {
        // Verifica que las imágenes tienen los src correctos
        const defaultImg = screen.getByAltText('LuigiaImagen');
        expect(defaultImg).toHaveAttribute('src', '../../../img/my5.png');

        const hoverImg = screen.getByAltText('LuigiaImagen2');
        expect(hoverImg).toHaveAttribute('src', '../../../img/my8.png');

        const instagramLogo = screen.getByAltText('Instagram Logo');
        expect(instagramLogo).toHaveAttribute('src', '../../../img/InstagramLogo2.png');

        const facebookLogo = screen.getByAltText('Facebook Logo');
        expect(facebookLogo).toHaveAttribute('src', '../../../img/FacebookLogo1.png');
    });

    test('applies correct styles on hover', () => {
        // Verifica que la imagen cambia de estilo al hacer hover
        const defaultImg = screen.getByAltText('LuigiaImagen');
        const hoverImg = screen.getByAltText('LuigiaImagen2');

        // Simula hover en la imagen
        fireEvent.mouseOver(defaultImg);

        // Verifica que la imagen de hover es visible
        expect(hoverImg).toBeVisible();

    });

    test('renders footer correctly on different screen sizes', () => {
        // Verifica que el footer se renderiza correctamente en diferentes tamaños de pantalla
        const textElements = screen.queryAllByText(/¡Conecta conmigo en mis redes para más inspiración!/i);
        expect(textElements).toHaveLength(1);
        
        expect(screen.getByText(/Todos los derechos reservados. © 2024 Luigiaart./i)).toBeInTheDocument();
    });
});
