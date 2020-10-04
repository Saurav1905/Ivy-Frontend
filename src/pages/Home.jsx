import React from "react";
import NavBar from "../components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Browse from "../components/Browse";
import Mytracks from "../components/Mytracks";
import NotFound from "./NotFound";
import UserRoadmap from "../components/UserRoadmap";

function Home() {
  return (
    <>
      <NavBar />
      <div className="Home__content">
        <Switch>
          {/* <Route path="" component={} /> */}

          <Route path="/track/browse/:id" component={UserRoadmap} />
          <Route path="/track/mytracks/" component={Mytracks} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/track/browse" component={Browse} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </>
  );
}

export default Home;
