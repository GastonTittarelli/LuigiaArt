import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from '../../../../../db/firebase-config.ts';

import Carrousel from "./Carrousel"
import CarrouselText from "./CarrouselText"
import styles from "./carrouselContainer.module.scss"


const CarrouselContainer = () => {
    const { id } = useParams();
    const [itemExists, setItemExists] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkItemExists = async () => {
            if (!id) return;

            const docRef = doc(db, "items", id);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                setItemExists(false);
            } 
            setLoading(false);
            
        };

        checkItemExists();
    }, [id]);

    if (loading) {
        return <div className={styles.condicion1}>Cargando...</div>;
    }

    if (!itemExists) {
        return <div className={styles.condicion2}><h2>¡Oops! Item no encontrado!</h2>;</div>
    }

    return (
            <div className={styles.container}>
                <CarrouselText/>

                <div className={styles.containerCarrousel}>
                    <Carrousel/>
                </div>

            </div>
    )
}

export default CarrouselContainer