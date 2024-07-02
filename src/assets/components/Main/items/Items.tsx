import { useEffect, useState } from "react";
import db from '../../../../../db/firebase-config.ts'
import { collection, getDocs } from "firebase/firestore";

export interface Item {
    id: string;
    titulo:string;
    descripcion: string;
    descripcion2: string;
    descripcion3: string;
    descripcion4: string;
    categoria: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    optimizada: string;
    precio: number;
    subCategoria:string;
    subCategoria2:string;
}

export const getItems = async () => {
    const itemsRef = collection(db, "items");
    const itemsCollection = await getDocs(itemsRef);
    const itemsdata = itemsCollection.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    })) as Item[];
    return itemsdata;
};

export const Items = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            const itemsdata = await getItems();
            setItems(itemsdata);
        };
        fetchItems();
    }, []);

    return (
        <div>
            <h1>Hola</h1>
            {items.map((item) => (
                <div key={item.id}>
                    <h3>{item.titulo}</h3>
                </div>
            ))}
        </div>
    );
};

export default Items;