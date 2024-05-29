import {doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import db from '../../../../../db/firebase-config.ts'
import { Item } from "../items/Items";
import styles from "./imagenList4.module.scss"

const ItemDetail = () => {
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
        
            <div className={styles.cards}>
                
                {item && (
                    <img className={styles.foto} key={item.id} src={item.img1} alt={item.titulo} />
                )}
            </div>

    )
}

export default ItemDetail