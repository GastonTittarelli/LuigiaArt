import styles from "./presentacion1.module.scss"

const Presentacion1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>Soy Marilú Borda</h2>

                <h3>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, fugiat natus officiis recusandae aliquid quia animi consequuntur at repellat inventore voluptate, blanditiis vel! Eos eum molestias beatae dolore nostrum rerum.
                Reiciendis porro rem error dicta nostrum illo corrupti, ratione ipsam doloremque assumenda, possimus vero in beatae? Esse, id sequi consequatur accusantium dicta iusto quis est modi quo dolores eaque cumque.</h3>
                    
            </div>

            <div className={styles.fotoContainer}>
                <img className={styles.foto} src="../../../img/principal.jpg" alt="Descripción de la imagen" />
            </div>

        </div>
    )
}

export default Presentacion1