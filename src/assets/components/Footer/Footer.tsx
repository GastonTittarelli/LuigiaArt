import styles from "./footer.module.scss"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.redes}>
                <h4>¡Conecta conmigo en mis redes para más inspiración!</h4>

                <a href="https://www.instagram.com/luigiaart/">
                    <img src="../../../img/InstagramLogo.png" alt="Instagram Logo" />
                </a>

                <a href="https://www.facebook.com/luigia.arts">
                    <img className={styles.face} src="../../../img/FacebookLogo.png" alt="Instagram Logo" />
                </a>
            </div>

            <div className={styles.copyright}>
                <p>© 2024 Luigiaart. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default Footer