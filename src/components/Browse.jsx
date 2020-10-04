import React from "react";
import GlobalRoadmap from "./GlobalRoadmap";
import Search from "./Search";
import { useState } from "react";

function Browse() {
  const [global, useGlobal] = useState([
    {
      title: "Data Science Track",
      description:
        "Follow the path Adel took to become a senior UX designer at Facebook.",
      id: 1,
      username: "Adel Khan",
      usertitle: "UX Designer, Facebook",
    },
    {
      title: "UX",
      description:
        "Follow the resources Rohini used to land a job as a Data Scientist at Palantir",
      id: 2,
      username: "Rohini Sharma",
      usertitle: "Data Scientist, Palantir",
    },
  ]);
  return (
    <>
      <div className="browse__top">
        <h1>Select Skilltracks you’d like to follow!</h1>
        <Search />
      </div>
      <div className="browse__roadmaps">
        {global.map((object) => (
          <GlobalRoadmap
            title={object.title}
            description={object.description}
            id={object.id}
            username={object.username}
            usertitle={object.usertitle}
            key={object.id}
          />
        ))}
      </div>
    </>
  );
}

export default Browse;
