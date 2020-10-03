import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User/User";
function App() {
  return (
    <>
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
