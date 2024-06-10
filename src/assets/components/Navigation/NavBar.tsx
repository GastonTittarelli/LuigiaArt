import "./nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
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

                <Link  to="/Virtual">
                    <li>Exposición virtual</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav