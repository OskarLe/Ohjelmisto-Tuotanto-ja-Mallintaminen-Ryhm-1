import React, { Component } from "react";
import "./App.css";

import { Route, Link, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import Survey from "./components/Survey";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="Header-text">Työterveyshyvinvointikysely</h3>
        </header>
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/survey" component={Survey} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
