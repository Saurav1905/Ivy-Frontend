import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
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
    </>
  );
}

export default SwiperCard;
