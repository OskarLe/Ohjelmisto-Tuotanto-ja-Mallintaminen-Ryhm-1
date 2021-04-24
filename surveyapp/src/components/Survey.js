import React from "react";
import { Link } from "react-router-dom";

import "survey-react/survey.css";
import * as SurveyForm from "survey-react";
import Surveyjson from "../survey.json";

var surveyRender = (
  <SurveyForm.Survey 
  json = {Surveyjson}
  />
)
const SurveyPage = () => (
  <div>
    <br/>
    <div>{surveyRender}</div>
    <p>
      <Link to="/Home">
        <button className="Button" type="button">
          Takaisin
        </button>
      </Link>
    </p>
  </div>
);

export default SurveyPage;
