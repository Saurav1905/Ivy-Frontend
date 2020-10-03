import React from "react";
import NavBar from "../components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Browse from "../components/Browse";
import Roadmaps from "../components/Roadmaps";
import NotFound from "./NotFound";
import Roadmap from "../components/Roadmap";

function Home() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Switch>
          {/* <Route path="" component={} /> */}
          <Route path="/Roadmaps/:id" component={Roadmap} />
          <Route exact path="/Roadmaps" component={Roadmaps} />
          <Route path="/not-found" component={NotFound} />
          <Route exact path="/home" component={Browse} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </>
  );
}

export default Home;
