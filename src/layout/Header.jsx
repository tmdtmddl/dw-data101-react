import React from "react";
import "./Header.css";
import { SiNetflix } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";

const Header = () => {
  return (
    <header>
      <div>
        <button className="logo">
          <SiNetflix />
        </button>
      </div>
      <div>
        <ul>
          <li>
            <button className="h lang">
              <CiGlobe />
              언어
            </button>
          </li>
          <li>
            <button className="login l">로그인</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
