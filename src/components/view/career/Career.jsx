// eslint-disable-next-line no-unused-vars
import React from "react";
import Title from "../../title/Title";
import Description from "../../description/Description";
import "./career.scss";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../Redux/languageSlice";
import Data from "../../../data/regined.json";

const Career = () => {
  const language = useSelector(selectLanguage);

  return (
    <div className="career" id="carrer">
      <Title title={Data.careerSection.title[language]} />
      <div className="careerContent">
        <Description
          className="careerDescription"
          description={Data.careerSection.description[language]}
        />
        <p className="careerLink">
          {Data.careerSection.portal.title[language]}{" "}
          <a href="#">{Data.careerSection.portal.portalLink}</a>
        </p>
        <div className="joinInput">
          <div className="group">
            <input type="text" placeholder="Enter your email id" />
            <button>{Data.careerSection.joinInput.btn[language]}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
