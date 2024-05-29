import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import db from '../../../../../db/firebase-config.ts';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "./styles.css"

export default function Appli() {
    const { id } = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [item, setItem] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [zoomStyle, setZoomStyle] = useState({});
    const zoomRefs = useRef([]);

    useEffect(() => {
        const getItemById = async () => {
            if (!id) return;

            const docRef = doc(db, "items", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setItem(docSnap.data());
            } else {
                console.log("No se encuentra el documento");
            }
        };

        getItemById();
    }, [id]);

    const handleOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    const handleMouseMove = (index, e) => {
        const zoomRef = zoomRefs.current[index];
        if (zoomRef) {
            const { left, top, width, height } = zoomRef.getBoundingClientRect();
            const x = ((e.pageX - left) / width) * 100;
            const y = ((e.pageY - top) / height) * 100;
            setZoomStyle({
                transformOrigin: `${x}% ${y}%`,
                transform: 'scale(2.5)' // Ajusta el nivel de zoom según tus necesidades
            });
        }
    };

    const handleMouseLeave = () => {
        setZoomStyle({
            transformOrigin: 'center center',
            transform: 'scale(1)'
        });
    };

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                {item && item.img1 && (
                        <div
                            className="zoom-container"
                            ref={el => (zoomRefs.current[0] = el)}
                            onMouseMove={(e) => handleMouseMove(0, e)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                src={item.img1}
                                alt={item.titulo}
                                style={zoomStyle}
                                onClick={() => handleOpen(item.img1)}
                            />
                        </div>
                )}
                    </SwiperSlide>
                {item && item.img2 && (
                    <SwiperSlide>
                        <div
                            className="zoom-container"
                            ref={el => (zoomRefs.current[1] = el)}
                            onMouseMove={(e) => handleMouseMove(1, e)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                src={item.img2}
                                alt={item.titulo}
                                style={zoomStyle}
                                onClick={() => handleOpen(item.img2)}
                            />
                        </div>
                </SwiperSlide>
                )}
                {item && item.img3 && (
                    <SwiperSlide>
                        <div
                            className="zoom-container"
                            ref={el => (zoomRefs.current[2] = el)}
                            onMouseMove={(e) => handleMouseMove(2, e)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                src={item.img3}
                                alt={item.titulo}
                                style={zoomStyle}
                                onClick={() => handleOpen(item.img3)}
                            />
                        </div>
                    </SwiperSlide>
                )}
                {item && item.img4 && (
                    <SwiperSlide>
                        <div
                            className="zoom-container"
                            ref={el => (zoomRefs.current[3] = el)}
                            onMouseMove={(e) => handleMouseMove(3, e)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                src={item.img4}
                                alt={item.titulo}
                                style={zoomStyle}
                                onClick={() => handleOpen(item.img4)}
                            />
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {item && item.img1 && (
                    <SwiperSlide>
                        <img key={item.id} src={item.img1} alt={item.titulo} />
                    </SwiperSlide>
                )}
                {item && item.img2 && (
                    <SwiperSlide>
                        <img key={item.id} src={item.img2} alt={item.titulo} />
                    </SwiperSlide>
                )}
                {item && item.img3 && (
                    <SwiperSlide>
                        <img key={item.id} src={item.img3} alt={item.titulo} />
                    </SwiperSlide>
                )}
                {item && item.img4 && (
                    <SwiperSlide>
                        <img key={item.id} src={item.img4} alt={item.titulo} />
                    </SwiperSlide>
                )}
            </Swiper>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="style">
                    <img src={selectedImage} alt="Imagen ampliada" style={{ height: "100%" }} />
                </Box>
            </Modal>
        </>
    );
}
