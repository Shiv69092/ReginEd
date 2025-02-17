// eslint-disable-next-line no-unused-vars
import React from "react";
import "./navbar.scss";
import logo from "/logo1.png";
import { selectLanguage } from "../../../Redux/languageSlice";
import Data from "../../../data/regined.json";
import { useSelector } from "react-redux";

const Navbar = () => {
  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const language = useSelector(selectLanguage);
  return (
    <div className="navbar" id="home">
      <div className="brand">
        <img src={logo} alt="" />
      </div>
      <div className="list">
        <div className="list-item">
          <a onClick={() => handleScroll("home")}>
            {Data.navbar.home[language]}
          </a>
        </div>
        <div className="list-item">
          <a onClick={() => handleScroll("about")}>
            {Data.navbar.about[language]}
          </a>
        </div>
        <div className="list-item">
          <a onClick={() => handleScroll("carrer")}>
            {Data.navbar.carrer[language]}
          </a>
        </div>
        <div className="list-item">
          <a onClick={() => handleScroll("contact")}>
            {Data.navbar.contact[language]}
          </a>
        </div>
      </div>
      <div className="hamburgerMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="black"
        >
          <path
            d="M4.25 17.6346C4.0375 17.6346 3.85938 17.5626 3.71563 17.4188C3.57188 17.275 3.5 17.0968 3.5 16.8842C3.5 16.6716 3.57188 16.4935 3.71563 16.35C3.85938 16.2064 4.0375 16.1346 4.25 16.1346H19.75C19.9625 16.1346 20.1406 16.2065 20.2843 16.3503C20.4281 16.4941 20.5 16.6723 20.5 16.8849C20.5 17.0975 20.4281 17.2756 20.2843 17.4192C20.1406 17.5628 19.9625 17.6346 19.75 17.6346H4.25ZM4.25 12.7499C4.0375 12.7499 3.85938 12.678 3.71563 12.5342C3.57188 12.3904 3.5 12.2122 3.5 11.9996C3.5 11.787 3.57188 11.6089 3.71563 11.4654C3.85938 11.3218 4.0375 11.25 4.25 11.25H19.75C19.9625 11.25 20.1406 11.3219 20.2843 11.4657C20.4281 11.6095 20.5 11.7877 20.5 12.0003C20.5 12.2129 20.4281 12.391 20.2843 12.5346C20.1406 12.6781 19.9625 12.7499 19.75 12.7499H4.25ZM4.25 7.86533C4.0375 7.86533 3.85938 7.79342 3.71563 7.64961C3.57188 7.50581 3.5 7.32761 3.5 7.11501C3.5 6.90242 3.57188 6.72434 3.71563 6.58076C3.85938 6.43716 4.0375 6.36536 4.25 6.36536H19.75C19.9625 6.36536 20.1406 6.43726 20.2843 6.58108C20.4281 6.7249 20.5 6.9031 20.5 7.11568C20.5 7.32828 20.4281 7.50637 20.2843 7.64996C20.1406 7.79354 19.9625 7.86533 19.75 7.86533H4.25Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
