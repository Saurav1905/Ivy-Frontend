import React from "react";

function UserRoadmap(props) {
  return <div>{props.match.params.id}</div>;
}

export default UserRoadmap;
