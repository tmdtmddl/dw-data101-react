import React from "react";
import "./Footer.css";
import LangButton from "./LangButton";

const Footer = () => {
  return (
    <footer id="ah">
      <div>
        <p>질문이 있으신가요? 문의 전화:00-308-321-0161(수신자보호) </p>
      </div>
      <ul>
        <li>
          <a href="">자주묻는 질문</a>
        </li>
        <li>
          <a href="">고객센터</a>
        </li>
        <li>
          <a href="">계정</a>
        </li>
        <li>
          <a href="">미디어센터</a>
        </li>
        <li>
          <a href="">투자정보</a>
        </li>
        <li>
          <a href="">입사정보</a>
        </li>
        <li>
          <a href="">넷플릭스 지원 디바이스</a>
        </li>
        <li>
          <a href="">이용악관</a>
        </li>
        <li>
          <a href="">개인정보처리방침</a>
        </li>
        <li>
          <a href="">개인정보처리방침</a>
        </li>
        <li>
          <a href="">개인정보처리방침</a>
        </li>
        <li>
          <a href="">개인정보처리방침</a>
        </li>
        <li>
          <a href="">개인정보처리방침</a>
        </li>
      </ul>
      <div className="wrap">
        <LangButton />
      </div>
      <div className="txt">
        <p>넷플릭스 대한민국</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
          magnam nihil libero unde, atque dignissimos non excepturi enim iure
          dolorem dolores? Labore rerum odit veniam excepturi minus.
          Repudiandae, consequuntur laborum.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
