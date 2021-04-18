import React, { Component } from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import Survey from "./components/Survey";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="Header-text">Työhyvinvointikysely</h3>
        </header>
 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Survey" component={Survey} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;