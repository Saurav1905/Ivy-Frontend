import { Avatar } from "@material-ui/core";
import React from "react";
import Swipper from "./Swipper";
function Tasks() {
  return (
    <div className="Task__bg">
      <div className="Task__heading">
        <h2>UX Design Track</h2>
        <div className="Task__avatar">
          <h4>Created By adel Khan</h4>
          <Avatar src="https://picsum.photos/200?random=1" />
        </div>
      </div>
      <Swipper />
    </div>
  );
}

export default Tasks;
