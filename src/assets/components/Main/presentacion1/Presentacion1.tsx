import styles from "./presentacion1.module.scss"

const Presentacion1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>Soy Marilú Borda</h2>

                <h3>Description: Mi espacio de arte, que tanta felicidad me da, donde puedo ser libre, donde me dejo volar y se abre un mundo de posibilidades, donde de a poco pude  atreverme, a explorar, experimentar y plasmar... un mundo desconocido para mí pero muy admirado, desde siempre... otra de mis grandes pasiones junto a la MÚSICA que es mi vida. 
                    
                Este espacio lleva mi nombre y el de mis ancestros italianos, hermosas mujeres, que fueron luz, abrieron mi camino y permitieron q hoy sea yo.</h3>
                    
            </div>

            <div className={styles.fotoContainer}>
                <img className={styles.foto} src="../../../img/principal.jpg" alt="Descripción de la imagen" />
            </div>

        </div>
    )
}

export default Presentacion1