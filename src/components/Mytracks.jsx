import React, { useState } from "react";
import MytracksTop from "./MytracksTop";
import GlobalRoadmap from "./GlobalRoadmap";
import Form from "./Form";
function Roadmaps() {
  const [filter, setFilter] = useState("UX Design");
  const [mytrack, useMytrack] = useState([
    {
      title: "Data Science Track",
      description:
        "Follow the path Adel took to become a senior UX designer at Facebook.",
      id: 1,
      username: "Adel Khan",
      usertitle: "Data Scientist, Palantir",
      category: "General",
    },
    {
      title: "UX",
      description:
        "Follow the resources Rohini used to land a job as a Data Scientist at Palantir",
      id: 2,
      username: "Rohini Sharma",
      usertitle: "UX Designer, Facebook",
      category: "UX Design",
    },
    {
      title: "Frontend Track",
      description:
        "Follow the resources Anshuman used to land a job as a Frontend Engineer",
      id: 3,
      username: "Anshuman Das",
      usertitle: "Frontend Dev, Uber",
      category: "Frontend",
    },
  ]);
  return (
    <>
      <MytracksTop />
      <div
        className="browse__wrapper"
        style={{
          display: "flex",
        }}
      >
        <div className="browse__roadmaps">
          {mytrack.map((object) => {
            if (object.category === filter)
              return (
                <GlobalRoadmap
                  title={object.title}
                  description={object.description}
                  id={object.id}
                  username={object.username}
                  usertitle={object.usertitle}
                  key={object.id}
                />
              );
          })}
        </div>
        <div
          style={{
            paddingTop: "12vh",
            marginLeft: "2vw",
          }}
          className="browse__selection"
        >
          <Form value={filter} setValue={setFilter} />
        </div>
      </div>
    </>
  );
}

export default Roadmaps;
