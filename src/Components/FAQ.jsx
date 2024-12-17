import React from "react";
import "./FAQ.css";
import { FaPlus } from "react-icons/fa6";

const qs = [
  "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요? ",
  " 넷플릭스란 무엇이가요?",
  "넷플릭스 요금은 얼마인가요?",
  "어디에서 시청할 수 있나요?",
  "멤버쉽을 해지하려면 어떻게 하나요?",
  " 아이들이 넷플릭스를 봐도 좋을까요?",
];
const nqs = [
  {
    q: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요? ",
    a: "lorem",
  },
  {
    q: "넷플릭스란 무엇이가요? ",
  },
  {
    q: "넷플릭스 요금은 얼마인가요? ",
  },
  {
    q: " 어디에서 시청할 수 있나요?",
  },
  {
    q: " 멤버쉽을 해지하려면 어떻게 하나요?",
  },
  {
    q: " 아이들이 넷플릭스를 봐도 좋을까요?",
  },
];
const FAQ = () => {
  const title = "자주묻는 질문";

  return (
    <div className="faq">
      <h3>{title} </h3>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis optio quod
      molestiae animi earum, necessitatibus a in rerum natus itaque maiores at,
      eveniet dolorum assumenda ex! Quis recusandae at similique.
      <ul>
        {/* <li>
          <button>
            넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요? <FaPlus />
          </button>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              esse iure facere facilis expedita adipisci velit veritatis error,
              ipsa impedit illum, quibusdam qui autem fuga animi dolor placeat
              ad voluptates?
            </p>
            <a href="">넷플릭스 콘텐츠를 한번 살펴보세요.</a>
          </div>
        </li>
        <li>
          <button>
            넷플릭스란 무엇이가요?
            <FaPlus />
          </button>
        </li>
        <li>
          <button>
            넷플릭스 요금은 얼마인가요?
            <FaPlus />
          </button>
        </li>
        <li>
          <button>
            어디에서 시청할 수 있나요?
            <FaPlus />
          </button>
        </li>
        <li>
          <button>
            멤버쉽을 해지하려면 어떻게 하나요?
            <FaPlus />
          </button>
        </li>
        <li>
          <button>
            아이들이 넷플릭스를 봐도 좋을까요?
            <FaPlus />
          </button>
        </li> */}
        {nqs.map((q, i) => {
          return (
            <li key={i}>
              <button>
                {q.q} <span>+</span>
              </button>

              {q.a && (
                <div>
                  <p>{q.a}</p>
                  <a href="">ㄱㄱㅅ</a>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;
