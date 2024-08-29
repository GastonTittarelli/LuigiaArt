import { fireEvent, render, screen } from '@testing-library/react';
import Nav from '../../assets/components/Navigation/NavBar';
import { MemoryRouter } from 'react-router-dom';

describe('Nav Component', () => {

    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Nav />
            </MemoryRouter>
        );
    });

    test('renders all main elements', () => {
        // Verifica que el botón de menú se muestra
        expect(screen.getByAltText('imagen de menu')).toBeInTheDocument();

        // Verifica que los enlaces de navegación se muestran
        expect(screen.getByText('Inicio')).toBeInTheDocument();
        expect(screen.getByText('Acerca de mi')).toBeInTheDocument();
        expect(screen.getByText('Galería')).toBeInTheDocument();
        expect(screen.getByText('Exposición virtual')).toBeInTheDocument();
    });

    test('opens and closes the menu when the button is clicked', () => {
        const menuButton = screen.getByRole('button', { name: /imagen de menu/i });

        // Clic para abrir el menú
        fireEvent.click(menuButton);
        expect(screen.getByRole('navigation')).toHaveClass('activo');

        // Clic para cerrar el menú
        fireEvent.click(menuButton);
        expect(screen.getByRole('navigation')).not.toHaveClass('activo');
    });

    test('closes the menu when clicking outside of it', () => {
        const menuButton = screen.getByRole('button', { name: /imagen de menu/i });
        
        // Abrir el menú
        fireEvent.click(menuButton);
        expect(screen.getByRole('navigation')).toHaveClass('activo');

        // Clic afuera para cerrar el menú
        fireEvent.mouseDown(document.body);
        expect(screen.getByRole('navigation')).not.toHaveClass('activo');
    });

    test('closes the menu when the route changes', () => {
        const menuButton = screen.getByRole('button', { name: /imagen de menu/i });

        // Abrir el menú
        fireEvent.click(menuButton);
        expect(screen.getByRole('navigation')).toHaveClass('activo');

        // Cambiar ruta simulando navegación
        fireEvent.click(screen.getByText('Acerca de mi'));
        expect(screen.getByRole('navigation')).not.toHaveClass('activo');
    });

    test('closes the menu when the back button is pressed', () => {
        const menuButton = screen.getByRole('button', { name: /imagen de menu/i });

        // Abrir el menú
        fireEvent.click(menuButton);
        expect(screen.getByRole('navigation')).toHaveClass('activo');

        // Simular clic en botón "atrás" del navegador
        fireEvent.popState(window);
        expect(screen.getByRole('navigation')).not.toHaveClass('activo');
    });

    test('applies the "active" class to the correct link', () => {
        // Comprobar que el enlace de Inicio tiene la clase "active"
        expect(screen.getByText('Inicio')).toHaveClass('active');

        // Cambiar a otra ruta y comprobar que el enlace correcto tiene la clase "active"
        fireEvent.click(screen.getByText('Acerca de mi'));
        expect(screen.getByText('Acerca de mi')).toHaveClass('active');
        expect(screen.getByText('Inicio')).not.toHaveClass('active');
    });
});
