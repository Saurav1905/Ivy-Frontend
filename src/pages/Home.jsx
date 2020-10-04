import React from "react";
import NavBar from "../components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Browse from "../components/Browse";
import Mytracks from "../components/Mytracks";
import NotFound from "./NotFound";
import Help from "../components/Help";
import UserRoadmap from "./UserRoadmap";
import AllRoadmap from "./AllRoadmap";

function Home() {
  return (
    <>
      <NavBar />
      <div className="Home__content">
        <Switch>
          <Route path="/track/mytrack/:id" component={UserRoadmap} />
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
