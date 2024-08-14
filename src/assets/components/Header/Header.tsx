import styles from"./header.module.scss"
import Nav from "../Navigation/NavBar"
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const Header = () => {

const location = useLocation();

const headerClass = location.pathname === '/' ? styles.fixed : styles.sticky;

    return (
        <header className={headerClass}>
            
            <div className={styles.logoContainer}>
                <Link to="/">
                    <h1>
                        <span className={styles.firstLetter}>L</span>uigia  
                        <span className={styles.firstLetter}>A</span>rt
                    </h1>
                </Link>    
            </div>

            <Nav/>

        </header>
    )
}

export default Header