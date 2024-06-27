import styles from "./loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.animacion}>
                    <img className={styles.foto} src="../../../img/concepto.png" alt="Descripción de la imagen" />
                
                    <div className={styles.sombra}></div>
        </div>
    )
}

export default Loader