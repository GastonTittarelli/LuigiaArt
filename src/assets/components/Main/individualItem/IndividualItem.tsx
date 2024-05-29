import { useEffect, useState } from 'react';
import { getItems, Item } from '../items/Items';

const IndividualItem = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
        const itemsData: Item[] = await getItems();
        setItems(itemsData);
        };

        fetchItems();
    }, []);

    return (
        <div>
        {items.map((item) => (
            <div key={item.id}>
                <h2>{item.titulo}</h2>
                <p>{item.descripcion}</p>
                <img src={item.img1} alt={item.titulo} />
            </div>
        ))}
        </div>
    );
};

export default IndividualItem;