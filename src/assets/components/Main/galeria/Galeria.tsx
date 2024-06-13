import styles from "./galeria.module.scss";
import { useState, useEffect } from 'react';
import { getItems, Item } from '../items/Items';
import { useParams, Link, useNavigate } from 'react-router-dom';


const Galeria = () => {
    const [items, setItems] = useState<Item[]>([]);
    const { category } = useParams<{ category?: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItems = async () => {
            const itemsData: Item[] = await getItems();
            const filteredItems = itemsData.filter(item => !category || item.categoria === category);
            setItems(filteredItems);
        };

        fetchItems();
    }, [category]);

    const updateTheDOMSomehow = (newCategory: string | null) => {
        // Actualiza el DOM como sea necesario para reflejar la nueva categoría
        const activeElement = document.querySelector(`.${styles.active}`);
        if (activeElement) {
            activeElement.classList.remove(styles.active);
        }
        const newActiveElement = document.querySelector(`[data-category="${newCategory || 'all'}"]`);
        if (newActiveElement) {
            newActiveElement.classList.add(styles.active);
        }
    };

    const spaNavigate = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string, newCategory: string | null) => {
        e.preventDefault();

        if (!document.startViewTransition) {
            updateTheDOMSomehow(newCategory);
            navigate(path);
            return;
        }

        document.startViewTransition(() => {
            updateTheDOMSomehow(newCategory);
            navigate(path);
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Esto asegura que el desplazamiento sea suave
        });
    };


    return (
        <div className={styles.contenedor}>

            <div className={styles.filterButtons}>
                <ul className={styles.navList}>
                    <li data-category="all" className={!category ? styles.active : ''}>
                        <Link to="/gallery" onClick={(e) => spaNavigate(e, "/gallery", null)}>
                            <p>Todos</p>
                        </Link>
                    </li>
                    <li data-category="pintura" className={category === 'pintura' ? styles.active : ''}>
                        <Link to="/gallery/pintura" onClick={(e) => spaNavigate(e, "/gallery/pintura", 'pintura')}>
                            <p>Pinturas</p>
                        </Link>
                    </li>
                    <li data-category="creacion" className={category === 'creacion' ? styles.active : ''}>
                        <Link to="/gallery/creacion" onClick={(e) => spaNavigate(e, "/gallery/creacion", 'creacion')}>
                            <p>Creaciones</p>
                        </Link>
                    </li>
                    <li data-category="restauracion" className={category === 'restauracion' ? styles.active : ''}>
                        <Link to="/gallery/restauracion" onClick={(e) => spaNavigate(e, "/gallery/restauracion", 'restauracion')}>
                            <p>Restauraciones</p>
                        </Link>
                    </li>
                </ul>
                
                
                <img src="../../../img/flechasw.png" alt="Scroll to top" onClick={scrollToTop} 
                    className={styles.flecha} />
                
            </div>

            <div className={styles.contenedorImgs}>
                {items.map((item) => (
                    <div key={item.id} className={styles.itemContainer}>
                        <img className={styles.imagenes} src={item.optimizada} alt={item.titulo} />
                        <Link to={`/${item.id}`}>
                            <h3>{item.titulo}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Galeria;
