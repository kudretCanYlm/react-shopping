import React from 'react';
import PropTypes from 'prop-types';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { DEFAULT_IMG_URL } from '../img/common/common-props';

const VerticalSlider = ({ images, className }) => {
  return (
    <div className={`vertical-slider ${className}`}>
      <Swiper
        autoplay={{
          delay: 3000,
          reverseDirection: true
        }}
        modules={[Navigation, Autoplay]}
        zoom
        slidesPerView={1}
        navigation={{
          nextEl: null,
          prevEl: null
        }}
        direction={'vertical'}
        loop
        mousewheel={true}
        scrollbar={{ draggable: true }}
        className="slider">
        {images.map((image, key) => (
          <SwiperSlide key={key} className="flex-column slide">
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

//prop-types
VerticalSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string
};

//default-props
VerticalSlider.defaultProps = {
  images: [DEFAULT_IMG_URL, DEFAULT_IMG_URL, DEFAULT_IMG_URL],
  className: ''
};

export default VerticalSlider;
