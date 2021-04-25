import React from "react";
import { Link } from "react-router-dom";


const Home = () => (
  <div>
    <header className="App-header">
      <h3 className="Header-text">Työhyvinvointikysely</h3>
    </header>

    <h2>Welcome to the survey!</h2>
    Choose your language:
    <br/>
      <Link to="/Survey_fi">
        <button className="Button" type="button">
          Suomi
        </button>
      </Link>

      <Link to="/Survey_en">
        <button className="Button" type="button">
          English
        </button>
      </Link>
  </div>
);

export default Home;
