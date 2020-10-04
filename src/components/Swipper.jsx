import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCard from "./SwiperCard";
function Swipper(props) {
  const [swiper, useSwiper] = useState([
    {
      // single step
      taskid: 1,
      taskTitle: "Design Fundamentals",
      taskDescription:
        "Whenever we want to get into uncharted territory or novel career paths, the first thing one should do is to familiarize ourselves with the vocabulary of that domain.  When I started it, there was this one course that helped me with the familiarization. IDF Design Fundamentals course. It has a comprehensive structure that introduces you to the design terms and gives you a fair understanding of what’s inside.",
      isCompleted: true,
      taskLink: "Finish the IDF Design Fundamentals course",
      ExtraReading: "The Design of Everyday Things by Don Norman",
    },
    {
      taskid: 2,
      taskTitle: "Understand Color Theory",
      taskDescription:
        "Whenever we want to get into uncharted territory or novel career paths, the first thing one should do is to familiarize ourselves with the vocabulary of that domain.  When I started it, there was this one course that helped me with the familiarization. IDF Design Fundamentals course. It has a comprehensive structure that introduces you to the design terms and gives you a fair understanding of what’s inside.",
      isCompleted: false,
      taskLink: "Finish the IDF Design Fundamentals course",
      ExtraReading: "The Design of Everyday Things by Don Norman",
    },
  ]);
  return (
    <div className="Task__task">
      <Swiper className="Swiper" spaceBetween={50} slidesPerView={3}>
        {swiper.map((object) => (
          <SwiperSlide
            style={{
              position: "relative",
              justifyContent: "space-between",
              padding: 20,
            }}
            className="Slide"
          >
            <SwiperCard
              taskTitle={object.taskTitle}
              isCompleted={object.isCompleted}
              id={object.taskid}
            />
          </SwiperSlide>
        ))}
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
