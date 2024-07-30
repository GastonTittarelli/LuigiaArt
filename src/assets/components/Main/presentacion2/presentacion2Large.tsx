import styles from "./presentacion2Large.module.scss"

const AcercaDeLarge = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.card} ${styles.left}`}>
                <img className={styles.foto} src="../../../img/1.jpg"alt="" />
                <h4>La magia del arte y el ritual del mate: Entre pinceladas y colores, el mate siempre está presente, brindándome la calma y el enfoque necesario para dar vida a cada detalle. Aquí me ves trabajando en una obra, en pleno proceso creativo, acompañada de la infusión que nutre mi creatividad.</h4>
            </div>

            <div className={`${styles.card} ${styles.right}`}>
                <h4>Inspiración y creatividad en su máxima expresión: Un vistazo íntimo al proceso creativo detrás de cada pintura, donde la imaginación cobra vida y cada detalle cuenta una historia única y personal.</h4>
                <img className={styles.foto} src="../../../img/2.jpg" alt="" />
            </div>

            <div className={`${styles.card} ${styles.left}`}>
                <img className={styles.foto} src="../../../img/4.jpg" alt="" />
                <h4>El arte en acción: Momentos de pura pasión y entrega, plasmando colores y formas con cada movimiento del pincel. Aquí, en medio del caos creativo, es donde la verdadera magia sucede.</h4>
            </div>

            <div className={`${styles.card} ${styles.right}`}>
                <h4>De la visión a la realidad: Transformando ideas en obras tangibles, con dedicación y talento. En esta imagen, me ves dando los toques finales, convirtiendo sueños en realidades que resuenan con quienes las contemplan.</h4>
                <img className={styles.foto} src="../../../img/3.jpg" alt="" />
            </div>

            <div className={`${styles.card} ${styles.left}`}>
                <img className={styles.foto} src="../../../img/5.1.jpg" alt="" />
                <h4>Dedicación en cada trazo: Capturando la esencia del arte en cada pincelada, aquí me ves sumergida en el proceso de creación, transformando un lienzo en blanco en una obra maestra llena de vida y emoción.</h4>
            </div>

        </div>
    )
}

export default AcercaDeLarge