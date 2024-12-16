import React from "react";
import "./SInput.css";

const SInput = () => {
  return (
    <div className="ba">
      <p>
        시청할 준비가되셨나요? 멤버쉽을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </p>
      <input type="text" placeholder="이메일을 입력하세요." />
      <div className="vn">
        <button>시작하기{">"}</button>
      </div>
    </div>
  );
};

export default SInput;
