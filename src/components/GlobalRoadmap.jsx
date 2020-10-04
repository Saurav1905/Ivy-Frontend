import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

function GlobalRoadmap(props) {
  return (
    <div className="Roadmap__container">
      <div className="Roadmap__info">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className="Roadmap__personal">
        <div className="Roadmap__avatar">
          <Avatar />
          <div className="Roadmap__avatartext">
            <h1>{props.username}</h1>
            <p>{props.usertitle}</p>
          </div>
        </div>
        <Link to={`/track/browse/${props.id}`} className="Roadmap__start">
          Start
        </Link>
      </div>
    </div>
  );
}

export default GlobalRoadmap;
