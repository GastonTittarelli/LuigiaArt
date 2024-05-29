import { useEffect, useState } from 'react';
import { getItems, Item } from '../items/Items';
import styles from "./imagenList2.module.scss"

const ImagenList2 = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
        const itemsData: Item[] = await getItems();
        setItems(itemsData);
        };

        fetchItems();
    }, []);

    return (
        <div  className={styles.contenedor}>
            {items.map((item) => (
                
                <img className={styles.imagenes} key={item.id} src={item.img1} alt={item.titulo} />
                
            ))}
        </div>
    );
};
export default ImagenList2