import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from '../../../../../db/firebase-config.ts';
import { Item } from '../items/Items.tsx';
import Carrousel from "./carrousel/Carrousel.jsx";
import CarrouselText from "./carrouselText/CarrouselText.tsx";
import styles from "./carrouselContainer.module.scss";
import ItemRec from "../itemsRecomendados/ItemsRec.tsx";
import Loader from "../loader/Loader.tsx";

const CarrouselContainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
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
                navigate('/not-found'); // Redirige a la página de error
            }
            setLoading(false);
        };

        fetchItem();
        window.scrollTo(0, 0);
    }, [id, navigate]);

    if (loading) {
        return <div className={styles.condicion1}>
            <Loader/>
        </div>;
    }

    return (
        <div className={styles.container}>
            <CarrouselText />

            <div className={styles.containerCarrousel}>
                <Carrousel />
            </div>

            {item && <ItemRec category={item.categoria} currentItemId={item.id}/>}
        </div>
    );
};

export default CarrouselContainer;

