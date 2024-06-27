
import Loader from "../loader/Loader";
import styles from "./expoVirtual.module.scss"
import { useEffect, useState } from 'react';

const ExpoVirtual = () => {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            {!iframeLoaded && (
                <Loader/>
            )}
            <iframe width="1280"
                    height="720" 
                    src="https://www.artsteps.com/embed/6650ce0c32b58f6c734420ed/1280/720" 
                    frameBorder="0" 
                    allowFullScreen 
                    onLoad={() => setIframeLoaded(true)}
                    style={{ display: iframeLoaded ? 'block' : 'none' }}>
            </iframe>

        </div>
    )
}

export default ExpoVirtual

