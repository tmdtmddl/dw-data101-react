import React from "react";
import { IoLanguageOutline } from "react-icons/io5";
import "./LanButton.css";

const LangButton = () => {
  return (
    <button className="h lang btn">
      <IoLanguageOutline />
      언어
    </button>
  );
};

export default LangButton;
