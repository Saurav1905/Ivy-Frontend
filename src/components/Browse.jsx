import React from "react";
import GlobalRoadmap from "./GlobalRoadmap";
import Search from "./Search";

// STYLES FOR SEARCH BAR IGNORE MAAR KAVII

function Browse() {
  return (
    <>
      <div className="browse__top">
        <h1>Select Skilltracks you’d like to follow!</h1>
        <Search />
      </div>
      <div className="browse__roadmaps">
        <GlobalRoadmap
          title="UX"
          description="Follow the path Adel took to become a senior UX designer at Facebook."
          id="1"
          username="Adel Khan"
          usertitle="UX Designer, Facebook"
        />
      </div>
    </>
  );
}

export default Browse;
