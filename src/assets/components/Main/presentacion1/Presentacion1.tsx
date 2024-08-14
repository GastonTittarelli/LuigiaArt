import styles from "./presentacion1.module.scss"

const Presentacion1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>Soy Marilú Borda</h2>

                <div className={styles.pContainer}>
                    <p>Mi espacio de arte que tanta felicidad me da. Es un lugar donde puedo ser libre, dejar volar mi imaginación y explorar un mundo lleno de posibilidades. A medida que me adentré en este terreno inexplorado, que siempre admiré desde la distancia, descubrí la valentía para experimentar y plasmar mi visión artística. La música, otra de mis grandes pasiones, no es solo un acompañamiento; es el latido que marca el ritmo de mi vida, inspirándome y enriqueciéndome en cada paso de mi exploración artística.</p> 

                    <p>Este espacio lleva mi nombre y el de mis ancestros italianos, mujeres extraordinarias que fueron luz en mi camino, abriendo puertas y permitiéndome ser quien soy hoy.</p>
                </div>
            </div>

            <div className={styles.fotoContainer}>
                <img className={styles.foto} src="../../../img/principal.jpg" alt="Mi imagen de presentación" />
                <span className={styles.tooltiptext}>En cada trazo hay una parte de mi alma, ¡Descúbrela!</span>
            </div>
        </div>
    )
}

export default Presentacion1