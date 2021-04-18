import React from "react";
import { Link } from "react-router-dom";

const Survey = () => (
  <div>
    SURVEY
    <p>
      <Link to="/Home">
        <button className="Button" type="button">
          Takaisin
        </button>
      </Link>
    </p>
  </div>
);

export default Survey;
