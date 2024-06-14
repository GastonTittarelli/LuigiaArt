
import { useEffect } from 'react';
import BackgroundIm from '../Main/backroundImg/BackgroundIm'
import ItemsByCategory from '../Main/imagenList3/ImagenList3'
import Imagen5List from '../Main/imagenList5/ImagenList5'


const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <BackgroundIm />
            <ItemsByCategory/>
            <Imagen5List/>
        </>
        )
}

export default HomePage