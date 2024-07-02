import { useEffect, useState } from "react";
import db from '../../../../../db/firebase-config.ts'
import { collection, getDocs, query, where } from "firebase/firestore";
import { Item } from "../items/Items.tsx";
import styles from "./imagenList3.module.scss"
import { Link } from "react-router-dom";

export const getItemsByCategory = async (categoria: string) => {
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

export const ItemsByCategory = () => {
    const [itemsPintura, setItemsPintura] = useState<Item[]>([]);
    const [itemsRestauracion, setItemsRestauracion] = useState<Item[]>([]);
    const [itemsCreacion, setItemsCreacion] = useState<Item[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

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

    useEffect(() => {
        if (itemsPintura.length > 0 && itemsRestauracion.length > 0 && itemsCreacion.length > 0) {
            const images = document.querySelectorAll(`.${styles.imagenes}`);
            let loadedCount = 0;

            images.forEach((img) => {
                img.addEventListener('load', () => {
                    loadedCount++;
                    if (loadedCount === images.length) {
                        setImagesLoaded(true);
                    }
                });
            });
        }
    }, [itemsPintura, itemsRestauracion, itemsCreacion]);

    return (
        <div className={styles.container}>

            <h2>Principales Destacados</h2>

            <div className={styles.pinturas}>
                <section className= {`${styles.imagenesSide} ${imagesLoaded ? styles.loaded : ''}`}>
                        {itemsPintura.map((item) => (
                            <div className={styles.contenedorImg} key={item.id}>
                                    <Link to = {`${item.id}`} >
                                        <img className={styles.imagenes} loading="lazy" src={item.subCategoria2} alt={item.titulo} />
                                    </Link>
                                    
                            </div>
                        ))}
                </section>
                

                <section className= {`${styles.imagenesSide} ${imagesLoaded ? styles.loaded : ''}`}>
                        {itemsPintura.map((item) => (
                            <div className={styles.contenedorImg} key={item.id}>
                                <Link to = {`${item.id}`} >
                                    <img className={styles.imagenes} loading="lazy" src={item.subCategoria2} alt={item.titulo} />
                                </Link>
                                
                            </div>
                        ))}
                </section>

                
            </div>

            <div className={styles.creacion}>
                <section className= {`${styles.imagenesSide} ${imagesLoaded ? styles.loaded : ''}`}>
                {itemsCreacion.map((item) => (
                    <div className={styles.contenedorImg} key={item.id}>
                        <Link to = {`${item.id}`} >
                            <img className={styles.imagenes} loading="lazy" src={item.subCategoria2} alt={item.titulo} />
                        </Link>
                    </div>
                ))}
                </section>

                <section className= {`${styles.imagenesSide} ${imagesLoaded ? styles.loaded : ''}`}>
                {itemsCreacion.map((item) => (
                    <div className={styles.contenedorImg} key={item.id}>
                    <Link to = {`${item.id}`} >
                        <img className={styles.imagenes} loading="lazy" src={item.subCategoria2} alt={item.titulo} />
                    </Link>
                    </div>
                ))}
                </section>
            </div>

            <div className={styles.restauracion}>
                <section className= {`${styles.imagenesSide} ${imagesLoaded ? styles.loaded : ''}`}>
                {itemsRestauracion.map((item) => (
                    <div className={styles.contenedorImg} key={item.id}>
                        <Link to = {`${item.id}`} >
                            <img className={styles.imagenes} loading="lazy" src={item.subCategoria2} alt={item.titulo} />
                        </Link>
                    </div>
                ))}
                </section>

                <section className= {`${styles.imagenesSide} ${imagesLoaded ? styles.loaded : ''}`}>
                {itemsRestauracion.map((item) => (
                    <div className={styles.contenedorImg} key={item.id}>
                        <Link to = {`${item.id}`}>
                            <img className={styles.imagenes} loading="lazy"  src={item.subCategoria2} alt={item.titulo} />
                        </Link>
                    </div>
                ))}
                </section>
            </div>

        </div>
    );
};

export default ItemsByCategory