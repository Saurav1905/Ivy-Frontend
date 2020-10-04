import { Link } from "react-router-dom";
import React, { useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
function Swipper(props) {
  const [swiper, useSwiper] = useState([
    {
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
      taskTitle: "Design Fundamentals",
      taskDescription:
        "Whenever we want to get into uncharted territory or novel career paths, the first thing one should do is to familiarize ourselves with the vocabulary of that domain.  When I started it, there was this one course that helped me with the familiarization. IDF Design Fundamentals course. It has a comprehensive structure that introduces you to the design terms and gives you a fair understanding of what’s inside.",
      isCompleted: true,
      taskLink: "Finish the IDF Design Fundamentals course",
      ExtraReading: "The Design of Everyday Things by Don Norman",
    },
    {
      taskid: 3,
      taskTitle: "Design Fundamentals",
      taskDescription:
        "Whenever we want to get into uncharted territory or novel career paths, the first thing one should do is to familiarize ourselves with the vocabulary of that domain.  When I started it, there was this one course that helped me with the familiarization. IDF Design Fundamentals course. It has a comprehensive structure that introduces you to the design terms and gives you a fair understanding of what’s inside.",
      isCompleted: true,
      taskLink: "Finish the IDF Design Fundamentals course",
      ExtraReading: "The Design of Everyday Things by Don Norman",
    },
  ]);
  return (
    <div className="Task__task">
      <Swiper className="Swiper" spaceBetween={50} slidesPerView={3}>
        <SwiperSlide
          style={{
            justifyContent: "space-between",
            padding: 20,
          }}
          className="Slide"
        >
          <h3>Design Fundamentals</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
            className="Swipper__bottom"
          >
            <h5>Done</h5> <CheckCircleIcon />
          </div>
        </SwiperSlide>

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
