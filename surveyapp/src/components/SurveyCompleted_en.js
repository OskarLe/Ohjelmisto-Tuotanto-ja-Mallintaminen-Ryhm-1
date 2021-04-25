import React from "react";
import { Link } from "react-router-dom";

const SurveyCompleted_en = () => (
  <div>
    <header className="App-header">
      <h3 className="Header-text">Työhyvinvointikysely</h3>
    </header>

    <h2>Thank you for your answers!</h2>
    <p>
      <Link to="/Home">
        <button className="Button" type="button">
          Front page
        </button>
      </Link>
    </p>
  </div>
);

export default SurveyCompleted_en;
