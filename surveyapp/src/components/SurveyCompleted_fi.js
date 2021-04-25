import React from "react";
import { Link } from "react-router-dom";

const SurveyCompleted_fi = () => (
  <div>
    <header className="App-header">
      <h3 className="Header-text">Työhyvinvointikysely</h3>
    </header>

    <h2>Kiitos vastauksistasi!</h2>
    <p>
      <Link to="/Home">
        <button className="Button" type="button">
          Etusivulle
        </button>
      </Link>
    </p>
  </div>
);

export default SurveyCompleted_fi;
