import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { DEFAULT_IMG_URL } from '../img/common/common-props';

const VerticalPersonSlider = ({ persons, slidesPerView, className }) => {
  return (
    <div className={`vertical-person-slider ${className}`}>
      <Swiper
        autoplay={{
          delay: 3000,
          reverseDirection: true
        }}
        modules={[Navigation, Autoplay]}
        zoom
        slidesPerView={slidesPerView}
        navigation={{
          nextEl: null,
          prevEl: null
        }}
        direction={'vertical'}
        loop
        mousewheel={true}
        scrollbar={{ draggable: true }}
        className="slider"
      >
        {persons.map((person, key) => (
          <SwiperSlide key={key} className="flex-column slide">
            <SliderCard person={person} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const SliderCard = ({ person }) => {
  let navigate = useNavigate();

  const routePerson = () => {
    navigate(`/person/${person.id}`);
  };

  return (
    <div onClick={routePerson} className="slider-card flex-column">
      <img src={person.img} />
      <span>{person.name}</span>
    </div>
  );
};

//prop-types
VerticalPersonSlider.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string
    })
  ).isRequired,
  slidesPerView: PropTypes.number,
  className: PropTypes.string
};

//default props
VerticalPersonSlider.defaultProps = {
  persons: [
    {
      id: '',
      name: 'Null Name',
      img: DEFAULT_IMG_URL
    },
    {
      id: '',
      name: 'Null Name',
      img: DEFAULT_IMG_URL
    },
    {
      id: '',
      name: 'Null Name',
      img: DEFAULT_IMG_URL
    }
  ],
  slidesPerView: 3,
  className: ''
};

export default VerticalPersonSlider;
