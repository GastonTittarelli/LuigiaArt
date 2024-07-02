import { useEffect } from 'react';
import BackgroundIm from '../Main/backroundImg/BackgroundIm'
import ItemsByCategory from '../Main/destacado/ImagenList3'
import Imagen5List from '../Main/imagenHogar/ImagenList5'

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