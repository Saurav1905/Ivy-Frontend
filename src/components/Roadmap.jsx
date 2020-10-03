import React from "react";

function Roadmap(props) {
  return (
    <div>
      <h5>{props.match.params.id}</h5>
    </div>
  );
}

export default Roadmap;
