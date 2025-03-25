import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1718900125i/209087709.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684815605i/112974860.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1694722764i/1303.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1543897827i/43097201.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1581527774i/41881472.jpg"/></SwiperSlide>
        
        
      </Swiper>
    </div>
  )
}

export default BannerCard
