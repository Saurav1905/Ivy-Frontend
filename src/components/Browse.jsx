import React from "react";
import GlobalRoadmap from "./GlobalRoadmap";
import Search from "./Search";
import { useState, useEffect } from "react";
import Form from "./Form";

function Browse() {
  const [global, setGlobal] = useState([
    {
      title: "Data Science Track",
      description:
        "Follow the path Adel took to become a senior UX designer at Facebook.",
      id: 1,
      username: "Adel Khan",
      category: "General",
      usertitle: "UX Designer, Facebook",
    },
    {
      title: "UX",
      description:
        "Follow the resources Rohini used to land a job as a Data Scientist at Palantir",
      id: 2,
      category: "UX Design",
      username: "Rohini Sharma",
      usertitle: "Data Scientist, Palantir",
    },
  ]);
  const [filter, setFilter] = useState("General");

  return (
    <>
      <div className="browse__top">
        <h1>Select Skilltracks you’d like to follow!</h1>
        <Search />
      </div>
      <div
        className="browse__wrapper"
        style={{
          display: "flex",
        }}
      >
        <div className="browse__roadmaps">
          {global &&
            global.map((object) => {
              console.log(object.author);
              if (object.category === filter)
                return (
                  <GlobalRoadmap
                    title={object.title}
                    description={object.description}
                    id={object._id}
                    username={object.username}
                    usertitle={object.category}
                    key={object._id}
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

export default Browse;
