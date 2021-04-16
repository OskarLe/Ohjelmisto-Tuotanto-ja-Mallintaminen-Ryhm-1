import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

const Survey = () => (
  <div>
    Tähä tulee sit se kysely joo
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
