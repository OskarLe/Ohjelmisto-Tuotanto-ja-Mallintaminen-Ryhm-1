import "survey-react/survey.css";
import * as SurveyForm from "survey-react";
import Surveyjson from "../survey_en.json";

var surveyRender = (
  <SurveyForm.Survey json={Surveyjson}/>
);

const SurveyPage_en = () => <div className="Survey">{surveyRender}</div>;

export default SurveyPage_en;
