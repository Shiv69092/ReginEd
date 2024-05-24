// eslint-disable-next-line no-unused-vars
import React from "react";
import DownloadImage from "/aboutBanner.png";
import ReginedImage from "../../../assets/downloadnowRight.png";
import "./download.scss";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../Redux/languageSlice";
import Title from "../../title/Title";
import Description from "../../description/Description";
import Data from "../../../data/regined.json";

const Download = () => {
  const language = useSelector(selectLanguage);

  return (
    <div className="donwload">
      <Title title={Data.downloadSection.title[language]} />
      <div className="downloadContent">
        <div className="imgLeft">
          <img src={DownloadImage} alt="" />
        </div>
        <Description description={Data.downloadSection.description[language]} />
        <div className="imgRight">
          <img src={ReginedImage} alt="" />
          <h5>REGINED</h5>
        </div>
      </div>
    </div>
  );
};

export default Download;
