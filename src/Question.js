import React, { useState } from "react";
import "./Question.css";

const Question = (props) => {
  const { question, answer, id } = props.data;
  const [signal, setSignal] = useState("+");

  const expand = () => {
    const resp = document.getElementsByClassName("answer");
    const thisElement = resp[id - 1];

    if (thisElement.style.display === "flex") {
      thisElement.style.display = "none";
      setSignal("+");
      return;
    }
    thisElement.style.display = "flex";
    setSignal("-");
    return;
  };

  return (
    <div className="quest-box">
      <div className="question">
        <h4>{question}</h4>
        <button className="circle" onClick={() => expand()}>
          {signal}
        </button>
      </div>
      <p className="answer">{answer}</p>
    </div>
  );
};

export default Question;
