import React from "react";
import "./SampleHeader.css";
import ButtonLang from "./ButtonLang";
import { SiNetflix } from "react-icons/si";

const SampleHeader = () => {
  return (
    <header id="header">
      <button id="logo">
        <SiNetflix />
      </button>
      <ul className="buts">
        <li>
          <ButtonLang />
        </li>
        <li>
          <button className="login">로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default SampleHeader;
