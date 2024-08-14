import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItems, Item } from '../items/Items';
import styles from "./itemsRec.module.scss";

interface SimilarItemsProps {
    category: string;
    currentItemId: string;
}

const ItemRec: React.FC<SimilarItemsProps> = ({ category, currentItemId }) => {
    const [similarItems, setSimilarItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchSimilarItems = async () => {
            const itemsData = await getItems();

            const filteredItems = itemsData.filter(item => item.categoria === category && item.id !== currentItemId);
            // Selecciona los de forma random a 4
            const shuffledItems = filteredItems.sort(() => 0.5 - Math.random());
            const selectedItems = shuffledItems.slice(0, 4);
            setSimilarItems(selectedItems);
        };

        fetchSimilarItems();
    }, [category, currentItemId]);

    return (
        <div className={styles.sItems}>
            <h2>Obras Similares</h2>

            <div className={styles.containerItems}>
                {similarItems.map(item => (
                    <Link to={`/${item.id}`} key={item.id} className={styles.itemLink}>
                        <div className={styles.item}>

                            <div className={styles.imgContainer}>

                                <img src={item.optimizada} alt={item.titulo} loading="lazy" className={styles.itemImage} />

                            </div>
                            
                            <p className={styles.itemTitle}>{item.titulo}</p>

                            <div className={styles.hoverLine}></div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ItemRec;