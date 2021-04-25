import "survey-react/survey.css";
import * as SurveyForm from "survey-react";
import Surveyjson from "../survey_fi.json";

var surveyRender = (
  <SurveyForm.Survey json={Surveyjson}/>
);

const SurveyPage_fi = () => <div className="Survey">{surveyRender}</div>;

export default SurveyPage_fi;
