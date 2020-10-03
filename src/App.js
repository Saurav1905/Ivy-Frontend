import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import User from "./pages/User/User";
function App() {
  return (
    <>
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Landing} />
      </Switch>
    </>
  );
}

export default App;
