import { useEffect, useState } from 'react';
import { getItems, Item } from '../items/Items';
import styles from "./imagenList5.module.scss"
import { Link } from "react-router-dom";

const Imagen5List = () => {
    const [items, setItems] = useState<Item[]>([]);
    // const [allLoaded, setAllLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);

    useEffect(() => {
        const fetchItems = async () => {
        const itemsData: Item[] = await getItems();
        const filteredItems = itemsData.filter(item => item.subCategoria);

        setItems(filteredItems);
        };

        fetchItems();
    }, []);

    // Cuando todas las imágenes estén cargadas, activamos la visualización
  const allLoaded = items.length > 0 && loadedCount === items.length;

    return (
        <div className={styles.contenedor}>
            <h2>Estilo y Creatividad: Hogares Vestidos de Arte</h2>
            
            <div className={`${styles.contenedorImgs} ${allLoaded ? styles.loaded : ''}`}>

                {items.map((item) => (
                    <Link to = {`${item.id}`} key={item.id} >
                        <img className={styles.imagenes}  src={item.subCategoria} alt={item.titulo} onLoad={() => setLoadedCount(prev => prev + 1)} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Imagen5List;