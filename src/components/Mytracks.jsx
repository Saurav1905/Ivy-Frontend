import React from "react";
import MytracksTop from "./MytracksTop";
import Roadmap from "./Roadmap";
function Roadmaps() {
  return (
    <>
      <MytracksTop />
      <div className="browse__roadmaps">
        <Roadmap
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

export default Roadmaps;
