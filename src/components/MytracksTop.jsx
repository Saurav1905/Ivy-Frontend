import React from "react";
import { NavLink } from "react-router-dom";

import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import PersonIcon from "@material-ui/icons/Person";
import HelpIcon from "@material-ui/icons/Help";
import Search from "./Search";
function MytracksTop() {
  return (
    <div className="browse__top">
      <div className="Mytracks__links">
        <NavLink className="Mytracks__completed" to="/track/mytracks/completed">
          <CheckBoxOutlinedIcon />
          <h6>Completed</h6>
        </NavLink>
        <NavLink className="Mytracks__completed" to="/track/mytracks/personal">
          <PersonIcon />
          <h6>Personal</h6>
        </NavLink>
        <NavLink className="Mytracks__completed" to="/track/mytracks/help">
          <HelpIcon />
          <h6>Help</h6>
        </NavLink>
      </div>
      <Search />
    </div>
  );
}

export default MytracksTop;
