import React from "react";
import "./Gal.css";

const Gal = () => {
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

export default Gal;
const img =
  "https:cdn.pixabay.com/photo/2018/03/02/21/49/waves-3194377_1280.jpg";
