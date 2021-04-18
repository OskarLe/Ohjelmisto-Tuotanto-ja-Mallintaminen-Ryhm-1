import React from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}

const Survey = () => (
  <div>
    SURVEY
    <ReCAPTCHA 
    sitekey="6LcLLK4aAAAAANw_py0M0qaU8oRyS4paL2MW7-Fl" 
    onChange={onChange} 
    theme="dark"
    />
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
