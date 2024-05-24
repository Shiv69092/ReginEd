// eslint-disable-next-line no-unused-vars
import React from "react";
import "./search.scss";
import { selectLanguage } from "../../Redux/languageSlice";
import Data from "../../data/regined.json";
import { useSelector } from "react-redux";

const Search = () => {
  const language = useSelector(selectLanguage);
  return (
    <div className="searchBar">
      <div className="searchInput">
        <div className="searchIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M16.67 29.4044C23.703 29.4044 29.4044 23.703 29.4044 16.67C29.4044 9.63694 23.703 3.93555 16.67 3.93555C9.63694 3.93555 3.93555 9.63694 3.93555 16.67C3.93555 23.703 9.63694 29.4044 16.67 29.4044Z"
              stroke="#200E32"
              // stroke-width="1.5"
              // stroke-linecap="round"
              // stroke-linejoin="round"
            />
            <path
              d="M25.5254 26.1871L30.5177 31.1667"
              stroke="#200E32"
              // stroke-width="1.5"
              // stroke-linecap="round"
              // stroke-linejoin="round"
            />
          </svg>
        </div>
        <input type="text" />
        <button>{Data.homepageBanner.button[language]}</button>
      </div>
    </div>
  );
};

export default Search;
