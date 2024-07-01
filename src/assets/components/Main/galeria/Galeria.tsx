import styles from "./galeria.module.scss";
import { useState, useEffect} from 'react';
import { getItems, Item } from '../items/Items';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Galeria = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
    const { category } = useParams<{ category?: string }>();
    const navigate = useNavigate();
    const validCategories = ["pintura", "creacion", "restauracion"];

    useEffect(() => {
        if (category && !validCategories.includes(category)) {
            navigate('/not-found'); // Redirige a la página de error
            return;
        }

    // useEffect(() => {
        const fetchItems = async () => {
            setImagesLoaded(false); 

            const itemsData: Item[] = await getItems();
            const filteredItems = itemsData.filter(item => !category || item.categoria === category);
            await preloadImages(filteredItems.map(item => item.optimizada));
            setItems(filteredItems);
            setImagesLoaded(true); 
        };

        fetchItems();
        window.scrollTo(0, 0);
    }, [category]);

    const updateTheDOMSomehow = (newCategory: string | null) => {
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
            behavior: 'smooth'
        });
    };

    const preloadImages = (srcArray: string[]) => {
        const promises = srcArray.map((src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            });
        });

        return Promise.all(promises);
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

            <div className={styles.contenedorImgs} style={{ opacity: imagesLoaded ? 1 : 0, transition: 'opacity 1s' }}>
                {items.map((item) => (
                    <div key={item.id} className={styles.itemContainer}>
                        <img className={styles.imagenes} loading="lazy" src={item.optimizada} alt={item.titulo} />
                        <Link to={`/${item.id}`}>
                            <h3>{item.titulo}</h3>
                        </Link>
                    </div>
                ))}
            </div>

            {!imagesLoaded && <div className={styles.loading}></div>}
        </div>
    );
};

export default Galeria;

