import { useEffect } from "react";
import styles from "./backround.module.scss"

const BackgroundIm = () => {

    useEffect(() => {
        const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        if (isChrome) {
            document.body.classList.add(styles.isChrome);
        }

        return () => {
            document.body.classList.remove(styles.isChrome);
        };
    }, []);

    
    return (
        <div className={styles.container}>

            <div className={styles.backroundImg}>
                <div className={styles.textHeader}>
                    <h1>LuigiaArt</h1>
                    <h2>Bienvenidos a mi Espacio Artístico</h2>
                    <p>Aquí podrás explorar las Emociones Capturadas en mis Creaciones</p>
                </div>
            </div>
        </div>
        
    )
}

export default BackgroundIm