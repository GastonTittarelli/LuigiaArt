import { useEffect, useState } from 'react';
import { getItems, Item } from '../items/Items';
import styles from "./imagenList5.module.scss"
import { Link } from "react-router-dom";

const Imagen5List = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
        const itemsData: Item[] = await getItems();
        const filteredItems = itemsData.filter(item => item.subCategoria);

        setItems(filteredItems);
        };

        fetchItems();
    }, []);

    return (
        <div className={styles.contenedor}>
            <h2>Estilo y Creatividad: Hogares Vestidos de Arte</h2>

            <div className={styles.contenedorImgs}>

                {items.map((item) => (
                    <Link to = {`${item.id}`} key={item.id}>
                        <img className={styles.imagenes} loading="lazy" src={item.subCategoria} alt={item.titulo} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Imagen5List;