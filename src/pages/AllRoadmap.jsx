import React from "react";
import MytracksTop from "../components/MytracksTop";
import Tasks from "../components/Tasks";

function AllRoadmap(props) {
  return (
    <>
      <MytracksTop />
      <Tasks id={props.match.params.id} />
    </>
  );
}

export default AllRoadmap;
