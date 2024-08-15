import styles from "./presentacion1.module.scss"

const Presentacion1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>Soy Marilú Borda</h2>

                <div className={styles.pContainer}>
                    <p>Mi espacio de arte es mi refugio, un rincón donde la felicidad florece, la libertad se despliega y mi imaginación se expande hacia un mundo lleno de posibilidades. Aquí, me atreví a explorar lo desconocido, un territorio que siempre admiré desde lejos. La música, otra de mis grandes pasiones, no es solo un acompañamiento, sino el pulso que guía mi vida, impregnando de color, alma y armonía cada una de mis obras.</p> 

                    <p>Agradezco a Dios por las bendiciones recibidas, por los dones que me permiten disfrutar de la belleza del arte, y por la compañía de personas maravillosas, familia y amigos, que llenan mi vida de significado. Este espacio lleva mi nombre y el de mis ancestros italianos, mujeres valientes que iluminaron mi camino, abriendo puertas y permitiéndome ser quien soy hoy.</p>
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