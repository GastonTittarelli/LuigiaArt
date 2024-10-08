import {doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import db from '../../../../../../db/firebase-config.ts'
import { Item } from "../../items/Items.tsx";
import styles from "./carrouselText.module.scss"

const CarrouselText = () => {
    const { id } = useParams();
    const [item, setItem] = useState<Item | null>(null);

const getItemById = async () => {

    if (!id) return;

    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        setItem(docSnap.data() as Item);
    } else{
        console.log("No se encuentra el documento")
    }
}

useEffect(() =>{
    getItemById();
}, [id]);

    return (
            <div className={styles.text}>
                
                <h2 className={styles.titulo}>{item?.titulo}</h2>
                
                <p className={styles.descripcion}>{item?.descripcion}</p>

                {item?.descripcion2 && <p className={`${styles.descripcion} ${styles.subDescripcion}`}>{item.descripcion2}</p>}
                {item?.descripcion3 && <p className={`${styles.descripcion} ${styles.subDescripcion}`}>{item.descripcion3}</p>}
                {item?.descripcion4 && <p className={`${styles.descripcion} ${styles.subDescripcion}`}>{item.descripcion4}</p>}

            </div>
    )
}

export default CarrouselText