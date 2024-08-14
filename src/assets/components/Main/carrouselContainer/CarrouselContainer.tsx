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
            setLoading(true); // Reiniciar el estado de carga
            if (!id) return;

            const docRef = doc(db, "items", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = { id: docSnap.id, ...docSnap.data() } as Item;

                
                const images = [data.img1, data.img2, data.img3, data.img4];

                // Esperar a que todas las imágenes se carguen
                const imagePromises = images.map(src => new Promise<void>((resolve) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => resolve();
                    img.onerror = () => resolve();
                }));

                await Promise.all(imagePromises);

                setItem(data);
            } else {
                setItem(null);
                navigate('/not-found');
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

