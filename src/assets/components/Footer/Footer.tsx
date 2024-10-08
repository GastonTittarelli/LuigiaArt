import { Link } from "react-router-dom"
import styles from "./footer.module.scss"

const Footer = () => {
    return (
        <div className={styles.container}>

            <div className={styles.contenido}>

                <div className={styles.foto}>
                        <Link to="/about">
                            <img className={styles.defaultImg} src="../../../img/my5.png" alt="LuigiaImagen" />
                            <img className={styles.hoverImg} src="../../../img/my8.png" alt="LuigiaImagen2" />
                        </Link>
                </div>        

                <div className={styles.redes}>
                    <h4>¡Conecta conmigo en mis redes para más inspiración!</h4>

                    <a href="https://www.instagram.com/luigiaart/" target="_blank" rel="noreferrer">
                        <img src="../../../img/InstagramLogo2.png" alt="Instagram Logo" />
                    </a>

                    <a href="https://www.facebook.com/luigia.arts" target="_blank" rel="noreferrer">
                        <img className={styles.face} src="../../../img/FacebookLogo1.png" alt="Facebook Logo" />
                    </a>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>Todos los derechos reservados. © 2024 Luigiaart.</p>
            </div>
        </div>
    )
}

export default Footer