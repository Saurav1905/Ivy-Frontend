import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/auth/AuthContext";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import User from "./pages/User/User";
function App() {
  return (
    <>
      <Switch>
        <AuthProvider>
          <Route path="/user" component={User} />
          <Route path="/track" component={Home} />
          <Route exact path="/" component={Landing} />
        </AuthProvider>
      </Switch>
    </>
  );
}

export default App;
