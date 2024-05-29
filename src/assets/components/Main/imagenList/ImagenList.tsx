import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import styles from "./imagenList.module.scss"

export default function WovenImageList() {
    return (
        <ImageList  sx={{ width: 1000, height: 850 }} variant="woven" cols={3} gap={8}>
        {itemData.map((item) => (
            <ImageListItem key={item.img}>
            <img
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
            />
            </ImageListItem>
        ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_151424p.jpg?alt=media&token=a8289a5f-54c5-474d-9256-b8fd24431d0b',
        title: 'Bed',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_152114p.jpg?alt=media&token=c0ab53b3-f4f9-4a16-973b-53d7be7971ba',
        title: 'Kitchen',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_153331p.jpg?alt=media&token=87a0930f-dd01-4519-849b-00034acf6a7f',
        title: 'Sink',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_154259p.jpg?alt=media&token=43c1969d-0203-4557-9d52-0d2a53989d8f',
        title: 'Books',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_154308p.jpg?alt=media&token=47503439-8c2a-472b-8b09-76098ccc6dfb',
        title: 'Chairs',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_155004p.jpg?alt=media&token=5f06eb68-cbab-420a-9a92-62aad18624f4',
        title: 'Candle',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_155434p.jpg?alt=media&token=d07ac0fd-3e65-4734-8a53-4696a5a51268',
        title: 'Laptop',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_160102p.jpg?alt=media&token=3591ff65-2e28-4c81-b0f0-f30f97f49d33',
        title: 'Doors',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_151424p.jpg?alt=media&token=a8289a5f-54c5-474d-9256-b8fd24431d0b',
        title: 'Bed',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_152114p.jpg?alt=media&token=c0ab53b3-f4f9-4a16-973b-53d7be7971ba',
        title: 'Kitchen',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_153331p.jpg?alt=media&token=87a0930f-dd01-4519-849b-00034acf6a7f',
        title: 'Sink',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_154259p.jpg?alt=media&token=43c1969d-0203-4557-9d52-0d2a53989d8f',
        title: 'Books',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_154308p.jpg?alt=media&token=47503439-8c2a-472b-8b09-76098ccc6dfb',
        title: 'Chairs',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_155004p.jpg?alt=media&token=5f06eb68-cbab-420a-9a92-62aad18624f4',
        title: 'Candle',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_155434p.jpg?alt=media&token=d07ac0fd-3e65-4734-8a53-4696a5a51268',
        title: 'Laptop',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/products-86c52.appspot.com/o/pinturas%2F20240330_160102p.jpg?alt=media&token=3591ff65-2e28-4c81-b0f0-f30f97f49d33',
        title: 'Doors',
    },
];