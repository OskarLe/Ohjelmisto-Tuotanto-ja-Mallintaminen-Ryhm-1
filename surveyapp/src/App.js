import React, { Component } from "react";
import "./App.css";

import { Route, Switch, Redirect,} from "react-router-dom";

import Home from "./components/Home";
import SurveyPage_fi from "./components/Survey_fi";
import SurveyPage_en from "./components/Survey_en";
import SurveyCompleted_fi from "./components/SurveyCompleted_fi";
import SurveyCompleted_en from "./components/SurveyCompleted_en";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/Survey_fi" component={SurveyPage_fi} />
          <Route path="/Survey_en" component={SurveyPage_en} />

          <Route path="/SurveyCompleted_fi" component={SurveyCompleted_fi} />
          <Route path="/SurveyCompleted_en" component={SurveyCompleted_en} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
