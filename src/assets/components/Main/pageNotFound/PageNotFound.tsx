import { Link } from "react-router-dom"
import styles from "./pageNotFound.module.scss"

const PageNotFound = () => {

    const photoPaths = [
        '../../../img/notFound/error1.png',
        '../../../img/notFound/error2.png',
        '../../../img/notFound/error3.png',
    ];

const getRandomPhoto = (): string => {

    const randomIndex = Math.floor(Math.random() * photoPaths.length);

    return photoPaths[randomIndex];
};

const randomPhoto = getRandomPhoto();

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
                <img src={randomPhoto} alt="Foto de error 404" />
            </div>

        </div>
    )
}

export default PageNotFound