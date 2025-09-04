import { useEffect, useState } from "react";
import db from '../../../../../db/firebase-config.ts';
import { collection, getDocs, query, where } from "firebase/firestore";
import { Item } from "../items/Items.tsx";
import styles from "./imagenList3.module.scss";
import { Link } from "react-router-dom";

export const getItemsByCategory = async (categoria: string): Promise<Item[]> => {
    const q = query(collection(db, "items"), where("categoria", "==", categoria));
    const querySnapshot = await getDocs(q);

    const itemsdata = querySnapshot.docs
        .map((doc) => ({
            ...doc.data(),
            id: doc.id,
        } as Item))
        .filter((item: Item) => item.subCategoria2);

    return itemsdata;
};

export const ItemsByCategory1 = () => {
    const [itemsPintura, setItemsPintura] = useState<Item[]>([]);
    const [itemsRestauracion, setItemsRestauracion] = useState<Item[]>([]);
    const [itemsCreacion, setItemsCreacion] = useState<Item[]>([]);
    // const [imagesLoaded, setImagesLoaded] = useState({ pintura: false, restauracion: false, creacion: false });

    // llevamos el conteo de imágenes cargadas
    const [loadedCounts, setLoadedCounts] = useState({ pintura: 0, restauracion: 0, creacion: 0 });


    useEffect(() => {
        const fetchItemsByCategory = async () => {
            const itemsPinturaData = await getItemsByCategory("pintura");
            const itemsRestauracionData = await getItemsByCategory("restauracion");
            const itemsCreacionData = await getItemsByCategory("creacion");

            setItemsPintura(itemsPinturaData);
            setItemsRestauracion(itemsRestauracionData);
            setItemsCreacion(itemsCreacionData);
        };
        fetchItemsByCategory();
    }, []);

    const handleImageLoad = (category: keyof typeof loadedCounts) => {
        setLoadedCounts(prevState => ({
            ...prevState,
            [category]: prevState[category] + 1
        }));
    };

    const allLoaded = (items: Item[], category: keyof typeof loadedCounts) => {
        return items.length > 0 && loadedCounts[category] >= items.length;
    };

    
    const renderImages = (items: Item[], category: keyof typeof loadedCounts) => {
        const isLoaded = allLoaded(items, category);

        return (
            <>
                <section className={`${styles.imagenesSide} ${isLoaded ? styles.loaded : ''}`}>
                    {items.map((item) => (
                    <div className={styles.contenedorImg} key={item.id}>
                        <Link to={`${item.id}`}>
                            <img
                                className={styles.imagenes}
                                src={item.subCategoria2}
                                alt={item.titulo}
                                onLoad={() => handleImageLoad(category)}
                                onError={() => handleImageLoad(category)}
                            />
                        </Link>
                    </div>
                ))}
            </section>
            <section className={`${styles.imagenesSide} ${isLoaded ? styles.loaded : ''}`}>
                {items.map((item) => (
                    <div className={styles.contenedorImg} key={item.id}>
                        <Link to={`${item.id}`}>
                            <img
                                className={styles.imagenes}
                                loading="lazy"
                                src={item.subCategoria2}
                                alt={item.titulo}
                                onLoad={() => handleImageLoad(category)}
                                onError={() => handleImageLoad(category)}
                            />
                        </Link>
                    </div>
                ))}
            </section>
        </>
    );
    };
    
    return (
        <div className={styles.container}>
            <h2>Principales Destacados</h2>

            <div className={styles.pinturas}>
                {renderImages(itemsPintura, 'pintura')}
            </div>

            <div className={styles.creacion}>
                {renderImages(itemsCreacion, 'creacion')}
            </div>

            <div className={styles.restauracion}>
                {renderImages(itemsRestauracion, 'restauracion')}
            </div>
        </div>
    );
};

export default ItemsByCategory1;
