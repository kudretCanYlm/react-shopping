import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const DetailsSlider = ({ className }) => {
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
        className="slider"
      >
        <SwiperSlide className="flex-column slide">
          <img src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/group_projects.png.webp?itok=tQSafZj0" />
        </SwiperSlide>
        <SwiperSlide className="flex-column slide">
          <img src="https://www.iakademi.com/wp-content/uploads/2021/05/microsoft-project-nedir-1170x500.png" />
        </SwiperSlide>
        <SwiperSlide className="flex-column slide">
          <img src="https://thumbs.dreamstime.com/b/business-team-to-calculate-financial-information-invest-new-projects-manager-meeting-euing-smart-phone-laptop-digital-167938232.jpg" />
        </SwiperSlide>
        <SwiperSlide className="flex-column slide">
          <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/10/what_is_a_project_manager_-_article_image.jpg" />
        </SwiperSlide>
        <SwiperSlide className="flex-column slide">
          <img src="https://res.cloudinary.com/monday-blogs/w_768,h_384,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2021/04/project-management-challenges.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DetailsSlider;
