import Presentacion2 from "../presentacion2/Presentacion2";
import Presentacion1 from "../presentacion1/Presentacion1";
import styles from "./acercaDe.module.scss"
import { useEffect } from "react";

const AcercaDe = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.contenedor}>
            <Presentacion1/>
            <Presentacion2/>
        </div>
    )
}

export default AcercaDe