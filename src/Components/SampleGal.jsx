import React from "react";
import "./SampleGal.css";

const SampleGal = () => {
  return (
    <div id="gal">
      <div className="wrap">
        <img src={img} />
        <button className="chev l">{"<"}</button>
        <button className="chev r">{">"}</button>
        <div className="txts">
          <h1>트렁크</h1>
          <p>2024</p>
        </div>
      </div>
    </div>
  );
};

export default SampleGal;
const img =
  "https://cdn.pixabay.com/photo/2020/05/01/02/26/hamster-5115246_1280.jpg";
