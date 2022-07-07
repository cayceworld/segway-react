import styles from './ProductsList.module.scss';
import { useSelector } from "react-redux";
import { getAllKickscooters } from "../../../redux/kickscooterReducer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
import Product from './Product';

const MobileProducts = () => {
  const kickscooters = useSelector(getAllKickscooters);
  return (
    <div className={styles.MobileProducts}>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
      >
        {kickscooters.map(kickscooter =>
          <SwiperSlide key={kickscooter.id}>
            <Product id={kickscooter.id} title={kickscooter.title} image={kickscooter.image} isSelect={kickscooter.isSelect} />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}

export default MobileProducts;