import React from "react";
import "./NInput.css";

const NInput = () => {
  return (
    <div className="ni">
      <p>
        시청할 준비가되셨나요? 멤버쉽을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </p>
      <input type="text" placeholder="이메일을 입력해주세요." />
      <div className="bt">
        <button>시작하기 {">"}</button>
      </div>
    </div>
  );
};

export default NInput;
