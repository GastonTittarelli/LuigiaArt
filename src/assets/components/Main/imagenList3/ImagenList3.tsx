import { useEffect, useState } from "react";
import db from '../../../../../db/firebase-config.ts'
import { collection, getDocs, query, where } from "firebase/firestore";
import { Item } from "../items/Items";
import styles from "./imagenList3.module.scss"
import { Link } from "react-router-dom";

export const getItemsByCategory = async (categoria: string) => {
    const q = query(collection(db, "items"), where("categoria", "==", categoria));
    const querySnapshot = await getDocs(q);

    const itemsdata = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    })) as Item[];

    return itemsdata;
};

export const ItemsByCategory = () => {
    const [itemsPintura, setItemsPintura] = useState<Item[]>([]);
    const [itemsRestauracion, setItemsRestauracion] = useState<Item[]>([]);
    const [itemsCreacion, setItemsCreacion] = useState<Item[]>([]);

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

    

    return (
        <div className={styles.container}>

            <h2>Lo destacado</h2>

            <div className={styles.pinturas}>
                <section className= {styles.imagenesSide}>
                {itemsPintura.map((item) => (
                    <Link to = {`${item.id}`} key={item.id}>
                        <img className={styles.imagenes} loading="lazy" src={item.optimizada} alt={item.titulo} />
                    </Link>
                    
                ))}
                </section>
                

                <section className= {styles.imagenesSide}>
                {itemsPintura.map((item) => (
                    
                    <Link to = {`${item.id}`} key={item.id}>
                        <img className={styles.imagenes} loading="lazy" src={item.optimizada} alt={item.titulo} />
                    </Link>
                    
                ))}
                </section>

                
            </div>

            <div className={styles.creacion}>
                <section className= {styles.imagenesSide}>
                {itemsCreacion.map((item) => (

                    <Link to = {`${item.id}`} key={item.id}>
                        <img className={styles.imagenes} loading="lazy" src={item.optimizada} alt={item.titulo} />
                    </Link>
                ))}
                </section>

                <section className= {styles.imagenesSide}>
                {itemsCreacion.map((item) => (
                    
                    <Link to = {`${item.id}`} key={item.id}>
                        <img className={styles.imagenes} loading="lazy" src={item.optimizada} alt={item.titulo} />
                    </Link>
                    
                ))}
                </section>
            </div>

            <div className={styles.restauracion}>
                <section className= {styles.imagenesSide}>
                {itemsRestauracion.map((item) => (
                    
                    <Link to = {`${item.id}`}  key={item.id}>
                        <img className={styles.imagenes} loading="lazy" src={item.optimizada} alt={item.titulo} />
                    </Link>
                ))}
                </section>

                <section className= {styles.imagenesSide}>
                {itemsRestauracion.map((item) => (
                    
                    <Link to = {`${item.id}`} key={item.id}>
                        <img className={styles.imagenes} loading="lazy"  src={item.optimizada} alt={item.titulo} />
                    </Link>
                    
                ))}
                </section>
            </div>

        </div>
    );
};

export default ItemsByCategory