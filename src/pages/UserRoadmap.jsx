import React from "react";
import MytracksTop from "../components/MytracksTop";
import Tasks from "../components/Tasks";
function UserRoadmap(props) {
  return (
    <>
      <MytracksTop />
      <Tasks id={1} />
    </>
  );
}

export default UserRoadmap;