import React from "react";
import "./Gallery.css";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const Gallery = () => {
  return (
    <div className="ga">
      <div className="wrap">
        <img src={img} />
        <button className="l">
          <IoChevronBackOutline />
        </button>
        <button className="r">
          <IoChevronForwardOutline />
        </button>
      </div>
    </div>
  );
};

export default Gallery;

const img =
  "https://cdn.pixabay.com/photo/2020/08/15/11/06/hamster-5490235_640.jpg";
