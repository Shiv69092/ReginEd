// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import bannerImage from "../../../assets/home-banner.jpg";
// import bannerImageMobile from "../../../assets/mobile-banner.jpg";
// import { useTypingText } from "../../../Utils/useTypingText";
import "./banner.scss";
import Title from "../../title/Title";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage, selectLanguage } from "../../../Redux/languageSlice";
import Description from "../../description/Description";
import Button from "../../button/Button";
import Search from "../../search/Search";
import Data from "../../../data/regined.json";
import Navbar from "./Navbar";
import mobileImg from "/bannerMobile.png";

const Banner = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  // const { word } = useTypingText(["GROUP"], 70, 20);
  // const [isMobileView, setIsMobileView] = useState(
  //   () => window.innerWidth <= 768
  // );
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobileView(window.innerWidth <= 768);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const handleLanguageChange = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
  };

  return (
    <div className="banner">
      <div className="bannerImage">
        {/* {isMobileView ? (
          <img src={bannerImageMobile} alt="" />
        ) : ( */}
        <img className="desktopImg" src={bannerImage} alt="" />
        <img className="mobileImg" src={mobileImg} alt="" />
      </div>
      <div className="bannerWrapper">
        <Navbar />
        <div className="languageBtn">
          <button
            className={`langBtn ${language === "en" ? "active" : ""}`}
            onClick={() => {
              handleLanguageChange("en");
            }}
          >
            English
          </button>
          <button
            className={`langBtn ${language === "hi" ? "active" : ""}`}
            onClick={() => {
              handleLanguageChange("hi");
            }}
          >
            Hindi
          </button>
        </div>
        {/* <Search /> */}
        <div className="content">
          <Title
            title={Data.homepageBanner.title[language]}
            className="bannerTitle"
          />
          {/* <span className="bannerTitle">{word}|</span> */}
          <Description
            className="bannerDescription"
            description={Data.homepageBanner.description[language]}
          />
          {/* {isMobileView ? (
            <Button className="bannerButton" buttonName="Enroll Now" />
          ) : ( */}
          <Button
            className="bannerButton"
            buttonName={Data.homepageBanner.button[language]}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
