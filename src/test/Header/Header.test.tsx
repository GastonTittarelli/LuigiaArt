import Header from '../../assets/components/Header/Header';
import { render, screen } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';

describe('Header Component', () => {

    test('renders the header component correctly', () => {
        const originalConsoleError = console.error;
        console.error = jest.fn(); // Mock console.error
    
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
    
        // Verifica que el header se renderiza
        const headerElement = screen.getByRole('banner');
        expect(headerElement).toBeInTheDocument();
    
        console.error = originalConsoleError; // Restore console.error
    });

    test('renders the logo with a link to the home page', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        // Verifica que el logo enlaza a "/"
        const logoLink = screen.getByRole('link', { name: /L uigia A rt/i });
        expect(logoLink).toHaveAttribute('href', '/');
    });

    test('renders the Nav component inside the Header', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        // Verifica que el componente Nav se renderiza dentro del header
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
});
