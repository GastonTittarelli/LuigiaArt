
import styles from'./modalImg.module.scss';

const Modal = ({ isOpen, onClose, image }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent}>
                <img src={image.src} alt={image.alt} />
            </div>
        </div>
    );
};

export default Modal;