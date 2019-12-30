import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          {/* Switch make sure only one routes is loaded up at a time  */}
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/project/:id" component={ProjectDetails}></Route>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/create" component={CreateProject} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
