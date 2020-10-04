import { Avatar } from "@material-ui/core";
import React from "react";
import Swipper from "./Swipper";
function Tasks(props) {
  return (
    <div className="Task__bg">
      <div className="Task__heading">
        <h2>UX Design Track</h2>
        <div className="Task__avatar">
          <h4>Created By adel Khan</h4>
          <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" />
        </div>
      </div>
      <Swipper id={props.id} />
    </div>
  );
}

export default Tasks;
