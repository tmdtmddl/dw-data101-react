import React from "react";
import "./Reason.css";
import { MdAccessTime } from "react-icons/md";

const reasons = [
  { desc: "취향에 딱맞는 이야기", Icon: MdAccessTime },
  { desc: "언제든지 해지 또는 전환 가능한 멤버십", Icon: MdAccessTime },
  { desc: "아이들을만을 위한 공간", Icon: MdAccessTime },
  { desc: "스마트폰,태블릿,노트북,tv에서 이용가능", Icon: MdAccessTime },
];
const Reason = () => {
  return (
    <div className="re">
      <h3>가입해야 하는 또 다른 이유</h3>
      {/* <ul>
        <li>
          <div>
            <p>취향에 딱 맞는 이야기</p>
            <MdAccessTime />
          </div>
        </li>

        <li>
          <div>
            <p>언제든지 해지 또는 전환 가능한 멤버십</p>
            <MdAccessTime />
          </div>
        </li>
        <li>
          <div>
            <p>아이들을만을 위한 공간</p>
            <MdAccessTime />
          </div>
        </li>
        <li>
          <div>
            <p>스마트폰,태블릿,노트북,tv에서 이용가능</p>
            <MdAccessTime />
          </div>
        </li>
      </ul> */}

      <ul>
        {reasons.map((r, i) => {
          return (
            <li key={i}>
              <div>
                <p>{r.desc}</p>
                <MdAccessTime />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reason;

// import React from 'react'

// const reasons=[1, 2, 3, 4]

// const Reason = () => {
//   return (
//     <div>
//         <h1>Map {reasons.length} 개</h1>
//         <ul>
//            {reasons.map(
//             (r,i)=>{
//                 return(
//                     <li key={i}>{r.desc}12341234</li>;
//                 )
//             }
//            )}
//         </ul>
//     </div>
//   )
// }

// export default Reason
