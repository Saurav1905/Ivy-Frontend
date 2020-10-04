import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Link } from "react-router-dom";
function renderBottom(props) {
  if (props.isCompleted) {
    return (
      <>
        <h5>Done</h5>{" "}
        <CheckCircleIcon
          style={{
            color: "green",
          }}
        />
      </>
    );
  } else
    return (
      <>
        <h5>Continue</h5> <CheckCircleIcon />
      </>
    );
}
function SwiperCard(props) {
  return (
    <>
      <h3>{props.taskTitle}</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
        className="Swipper__bottom"
      >
        {renderBottom(props)}
      </div>
      <span style={{ position: "absolute", bottom: "45%" }}>
        <Link
          to={`/track/browse/show/${props.id}`}
          style={{
            fontSize: 30,
            cursor: "pointer",
            textDecoration: "none",
            color: "black",
          }}
        >
          +
        </Link>
      </span>
    </>
  );
}

export default SwiperCard;
