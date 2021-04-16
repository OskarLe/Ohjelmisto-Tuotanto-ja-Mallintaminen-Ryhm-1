import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Tervetuloa kyselyyn!</h2>
    Aloita kysely alla olevasta napista:
    <p>
      <Link to="/Survey">
        <button className="Button" type="button">
          Kyselyyn
        </button>
      </Link>
    </p>
  </div>
);

export default Home;
