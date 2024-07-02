import styles from "./presentacion1.module.scss"

const Presentacion1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>Soy Marilú Borda</h2>

                <div className={styles.pContainer}>
                    <p>Mi espacio de arte que tanta felicidad me da, donde puedo ser libre, dejar volar mi imaginación y explorar un mundo lleno de posibilidades. Donde poco a poco, pude atreverme a explorar, experimentar y plasmar mi arte en este terreno inexplorado, que siempre he admirado desde lejos. Junto al arte, la música es otra de mis grandes pasiones. Es más que un acompañamiento; es el latido que da ritmo a mi vida, inspirándome y complementando mi exploración artística.</p> 

                    <p>Este espacio lleva mi nombre y el de mis ancestros italianos, hermosas mujeres que fueron luz, abrieron mi camino y permitieron que hoy sea yo.</p>
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