import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <Link to="/">Browse</Link>
      <Link to="/Roadmaps">MyRoadMap</Link>
    </div>
  );
}

export default NavBar;
