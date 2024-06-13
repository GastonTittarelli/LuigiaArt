import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from '../../../../../db/firebase-config.ts';
import { Item } from '../items/Items';
import Carrousel from "./Carrousel";
import CarrouselText from "./CarrouselText";
import styles from "./carrouselContainer.module.scss";
import ItemRec from "../itemsRecomendados/ItemsRec.tsx";

const CarrouselContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState<Item | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            if (!id) return;

            const docRef = doc(db, "items", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setItem({ id: docSnap.id, ...docSnap.data() } as Item);
            } else {
                setItem(null);
            }
            setLoading(false);
        };

        fetchItem();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return <div className={styles.condicion1}>Cargando...</div>;
    }

    if (!item) {
        return <div className={styles.condicion2}><h2>¡Oops! Item no encontrado!</h2></div>;
    }

    return (
        <div className={styles.container}>
            <CarrouselText />

            <div className={styles.containerCarrousel}>
                <Carrousel />
            </div>

            <ItemRec category={item.categoria} currentItemId={item.id}/>
        </div>
    );
};

export default CarrouselContainer;
