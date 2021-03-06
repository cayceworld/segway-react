import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";


const Gallery = props => {



  return (

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={true}
        modules={[Pagination]}
      >
        {props.kickscooter.gallery.length == 0
          ? <img src={`${process.env.PUBLIC_URL}/images/Kickscooters List/${props.kickscooter.image}`} />
          : props.kickscooter.gallery.map(image => <SwiperSlide key={image.image} ><img src={`${process.env.PUBLIC_URL}/images/Kickscooters Gallery/${image.image}`} /></SwiperSlide>)
        }
      </Swiper>


  )
}

export default Gallery;