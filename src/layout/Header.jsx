import React from "react";
import "./Header.css";
import { SiNetflix } from "react-icons/si";
import LangButton from "./LangButton";

const Header = () => {
  return (
    <header>
      <div>
        <button className="title">
          <SiNetflix />
        </button>
      </div>
      <div>
        <ul>
          <li>
            <LangButton />
          </li>
          <li>
            <button className="login l btn">로그인</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
