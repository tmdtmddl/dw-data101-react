import React from "react";
import "./Poster.css";

const Poster = () => {
  return (
    <div className="poster">
      <h3>지금 뜨는 콘텐츠</h3>
      <ul>
        {/* <Posteritem /> */}
        {/* <li>
          <img src={img1} alt="img1" />
          <p>영화제목</p>
        </li>
        <li>
          <img src={img2} alt="img2" />
          <p>영화제목</p>
        </li> */}
        {imgs.map((img, i) => {
          return (
            <li key={i}>
              <img src={img} alt="img1" />
              <p>영화제목</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Poster;
// js활용해서 똑같이 만드는방법
const Posteritem = () => {
  return (
    <li>
      <img src={""} alt="img1" />
      <p>영화제목</p>
    </li>
  );
};
const img1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIylEO9ccJ2c_mQTguuW94AyUUUKJQtFfPBQ&s";
const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTGqX_YPGErbMla5usMYD9BfSYAfaTk3dAg&s";
const img3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlVTHidIEVMDI9saULVcTnlsyPxp4vkchsQ&s";

const imgs = [img1, img2, img3];
