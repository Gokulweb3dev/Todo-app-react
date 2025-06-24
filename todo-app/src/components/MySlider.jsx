import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function MySlider() {
  return (
    <div className="w-full h-48">
      <Swiper
        modules={[Autoplay, Pagination]} // 👈 include Autoplay module
        autoplay={{ delay: 2500, disableOnInteraction: false }} // 👈 enable autoplay
        spaceBetween={50}
        slidesPerView={1}
        loop={true} // 👈 loop required for infinite autoplay
      >
        <SwiperSlide><div className="bg-blue-300 h-full flex items-center justify-center">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="bg-green-300 h-full flex items-center justify-center">Slide 2</div></SwiperSlide>
        <SwiperSlide><div className="bg-pink-300 h-full flex items-center justify-center">Slide 3</div></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MySlider;
