import { Link } from "react-router-dom";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
function Swipper(props) {
  return (
    <div className="Task__task">
      <Swiper
        className="Swiper"
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="Slide">slide</SwiperSlide>
        <SwiperSlide className="Slide">slide</SwiperSlide>
        <SwiperSlide className="Slide">
          <Link
            to={`/track/mytrack/create/${props.id}`}
            style={{
              fontSize: 30,
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
            }}
          >
            +
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Swipper;
