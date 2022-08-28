import React from 'react';
import PropTypes from 'prop-types';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { DEFAULT_IMG_URL } from '../img/common/common-props';

const DetailsSlider = ({ images, className }) => {
  //change buttons there are examples on the stack

  return (
    <div className={`details-slider ${className}`}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="slider">
        {images.map((image, key) => (
          <SwiperSlide className="flex-column slide">
            <img src={image} key={key} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

//prop-types
DetailsSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string
};

//default props
DetailsSlider.defaultProps = {
  images: [DEFAULT_IMG_URL]
};

export default DetailsSlider;
