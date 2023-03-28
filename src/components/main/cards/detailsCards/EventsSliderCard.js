import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';
import BackgroundImg from 'components/base/img/BackgroundImg';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import ContentText from 'components/base/texts/ContentText';
import ClassicButton from 'components/base/buttons/ClassicButton';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { takeTextWithWholeWord } from 'utils/StringFunctions';
import { toEventDetailsPage } from 'utils/Redirects';

const EventsSliderCard = ({ events, className }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const navigate = useNavigate();

  const redirectToEventDetails = (id) => {
    navigate(toEventDetailsPage(id));
  };

  return (
    <div className={`events-slider-details-card ${className}`}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        autoplay={{
          delay: 3000
        }}
        slidesPerView={1}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        loop
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="slider">
        {events.map((event, key) => (
          <SwiperSlide key={key} className="flex-column slide">
            <div className="slide-img-layout">
              <BackgroundImg imgUrl={event.imgUrl} className="slide-img" />
            </div>
            <div className="slide-content flex-column">
              <ThinMidTitle className="title-color-1 center-text">{event.title}</ThinMidTitle>
              <div className="flex-row flex-center-items">
                <ContentText className="white">
                  {event.about.length >= 200
                    ? takeTextWithWholeWord(event.about, 200) + ' ...'
                    : event.about}
                </ContentText>
                <ClassicButton
                  text="Details"
                  onClick={() => redirectToEventDetails(event.id)}
                  className="btn"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <CustomSliderButton
          fontSize={30}
          customRef={navigationPrevRef}
          toLeft={true}
          className="icon-margin-1"
        />
        <CustomSliderButton
          fontSize={30}
          customRef={navigationNextRef}
          toLeft={false}
          className="icon-margin-1"
        />
      </Swiper>
    </div>
  );
};

//will create a new file
const CustomSliderButton = ({ toLeft, className, customRef, fontSize = 20 }) => {
  const icon = toLeft ? (
    <AiOutlineLeft fontSize={fontSize} />
  ) : (
    <AiOutlineRight fontSize={fontSize} />
  );

  return (
    <div
      className={`custom-slider-button flex-row ${toLeft ? 'to-left' : 'to-right'} ${className}`}
      ref={customRef}>
      {icon}
    </div>
  );
};

EventsSliderCard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired
    })
  ).isRequired,
  className: PropTypes.string
};

EventsSliderCard.defaultProps = {
  events: [
    {
      id: '',
      imgUrl: DEFAULT_IMG_URL,
      title: 'Empty Title',
      about: 'Empty About'
    }
  ]
};

export default EventsSliderCard;
