import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
function Swipper(props) {
  const [swiper, useSwiper] = useState([
    {
      id: 1,
      tasks: "BLAA",
    },
    {
      id: 2,
    },
  ]);
  return (
    <div className="Task__task">
      <Swiper className="Swiper" spaceBetween={50} slidesPerView={3}>
        <SwiperSlide className="Slide">Map Task</SwiperSlide>

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
