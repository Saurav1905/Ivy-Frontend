import React from "react";
import NavBar from "../components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Browse from "../components/Browse";
import Mytracks from "../components/Mytracks";
import NotFound from "./NotFound";
import Help from "../components/Help";
import AllRoadmap from "./AllRoadmap";
import CreateTrack from "./CreateTrack";
import ShowTask from "./ShowTask";

function Home() {
  return (
    <>
      <NavBar />
      <div className="Home__content">
        <Switch>
          <Route exact path="/track/mytrack/show/:id" component={ShowTask} />
          <Route
            exact
            path="/track/mytrack/create/:id"
            component={CreateTrack}
          />
          <Route path="/track/browse/:id" component={AllRoadmap} />
          <Route path="/track/mytracks/help" component={Help} />
          <Route path="/track/mytracks/" component={Mytracks} />
          <Route path="/track/browse" component={Browse} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </>
  );
}

export default Home;
