import React from "react";

const Input = () => {
  return (
    <div>
      <p>
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작 하려면 이메일 주소를
        입력하세요.
      </p>
      <input className="gq" type="email" placeholder="이메일 주소" />
    </div>
  );
};

export default Input;
