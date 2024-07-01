import { Link } from "react-router-dom"
import styles from "./pageNotFound.module.scss"

const PageNotFound = () => {
    return (
        <div className={styles.container}>

            <div className={styles.text}>
                <h2>¡Oh no!</h2>

                <div className={styles.containerLetters}>
                    <p>El enlace que seguiste no conduce a ninguna parte. Es posible que la página o el artículo que estás buscando no exista.</p>
                    
                    <Link to="/">
                        <button className={styles.redireccion}>Volver al menú principal</button>
                    </Link>
                </div>
            </div>

            <div className={styles.containerFoto}>
                <img src="../../../public/img/notFound/error4-1.png" alt="" />
            </div>

        </div>
    )
}

export default PageNotFound