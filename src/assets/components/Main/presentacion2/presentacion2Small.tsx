import { useState } from "react";
import styles from "./presentacion2Small.module.scss";

const AcercaDeSmall = () => {
    const [activeCards, setActiveCards] = useState<boolean[]>(Array(5).fill(false));
    const [buttonImageSrcs, setButtonImageSrcs] = useState<string[]>(Array(5).fill('../../../img/flechaLeft.png'));

    const toggleActiveClass = (index: number) => {
        setActiveCards(prevState => {
            const newActiveCards = [...prevState];
            newActiveCards[index] = !newActiveCards[index];
            return newActiveCards;
        });

        setButtonImageSrcs(prevState => {
            const newButtonImageSrcs = [...prevState];
            newButtonImageSrcs[index] = activeCards[index] ? '../../../img/flechaLeft.png' : '../../../img/flechaRight.png';
            return newButtonImageSrcs;
        });
    };

    const cardsContent = [
        {
            imgSrc: "../../../img/1.jpg",
            text: "La magia del arte y el ritual del mate: Entre pinceladas y colores, el mate siempre está presente, brindándome la calma y el enfoque necesario para dar vida a cada detalle. Aquí me ves trabajando en una obra, en pleno proceso creativo, acompañada de la infusión que nutre mi creatividad."
        },
        {
            imgSrc: "../../../img/2.jpg",
            text: "Inspiración y creatividad en su máxima expresión: Un vistazo íntimo al proceso creativo detrás de cada pintura, donde la imaginación cobra vida y cada detalle cuenta una historia única y personal."
        },
        {
            imgSrc: "../../../img/4.jpg",
            text: "El arte en acción: Momentos de pura pasión y entrega, plasmando colores y formas con cada movimiento del pincel. Aquí, en medio del caos creativo, es donde la verdadera magia sucede."
        },
        {
            imgSrc: "../../../img/3.jpg",
            text: "De la visión a la realidad: Transformando ideas en obras tangibles, con dedicación y talento. En esta imagen, me ves dando los toques finales, convirtiendo sueños en realidades que resuenan con quienes las contemplan."
        },
        {
            imgSrc: "../../../img/5.1.jpg",
            text: "Dedicación en cada trazo: Capturando la esencia del arte en cada pincelada, aquí me ves sumergida en el proceso de creación, transformando un lienzo en blanco en una obra maestra llena de vida y emoción."
        }
    ];

    return (
        <div className={styles.container}>
            {cardsContent.map((card, index) => (
                <div key={index} className={`${styles.card} ${activeCards[index] ? styles.active : styles.left}`}>
                    <img className={styles.foto} src={card.imgSrc} alt="" />
                    <button onClick={() => toggleActiveClass(index)}> 
                        <img className={styles.info} src={buttonImageSrcs[index]} alt="imagen de flechas" /> 
                    </button>
                    <h4 className={`${styles.text} ${activeCards[index] ? styles.visible : ''}`}>
                        <strong>{card.text.split(": ")[0]}:</strong> {card.text.split(": ")[1]}
                    </h4>
                </div>
            ))}
        </div>
    );
};

export default AcercaDeSmall ;