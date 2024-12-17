import React from "react";
import "./Header2.css";
import { RiNetflixFill } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";

const Header = () => {
  return (
    <div className="wrapp">
      <button className="go">
        <RiNetflixFill />
      </button>
      <ul className="jo">
        <li>
          <button className="do">
            <IoLanguage />
            한국어
          </button>
        </li>
        <li>
          <button className="do log">로그인</button>
        </li>
      </ul>
    </div>
  );
};

export default Header2;
