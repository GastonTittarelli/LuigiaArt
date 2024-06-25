import { Link } from "react-router-dom"
import styles from "./footer.module.scss"

const Footer = () => {
    return (
        <div className={styles.container}>

            <div className={styles.gallColor}></div>
            <div className={styles.contenido}>

                <div className={styles.foto}>
                        <Link to="/about">
                            <img className={styles.defaultImg} src="../../../img/my3.png" alt="" />
                            <img className={styles.hoverImg} src="../../../img/my2hover.png" alt="" />
                        </Link>
                </div>        

                <div className={styles.redes}>
                    <h4>¡Conecta conmigo en mis redes para más inspiración!</h4>

                    <a href="https://www.instagram.com/luigiaart/">
                        <img src="../../../img/InstagramLogo2.png" alt="Instagram Logo" />
                    </a>

                    <a href="https://www.facebook.com/luigia.arts">
                        <img className={styles.face} src="../../../img/FacebookLogo1.png" alt="Instagram Logo" />
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