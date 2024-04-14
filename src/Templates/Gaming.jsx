import { useState } from "react";
import "../Styles/Gaming.css";
import { Questions } from "../Components/Questions";

export const Gaming = ({ setLastQuestion, setStart, score, setScore }) => {
  const [clickedContainer, setClickedContainer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [btnText, setBtnText] = useState("Next question");

  // Move to the next Question
  //Change text of button to SUBMIT if current Question is the last Question
  const handleNext = () => {
    setClickedContainer(null);
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion === Questions.length - 2) {
      setBtnText("Submit");
    }
    if (btnText === "Submit") {
      setLastQuestion(true);
      setStart(false);
    }
  };

  // Check if option selected is correct
  const handleClick = (containerId) => {
    const selectedAnswer = Questions[currentQuestion].options[containerId - 1];
    const correctAnswer = Questions[currentQuestion].answer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
    setClickedContainer(containerId);
  };

  return (
    <div className="big-container">
      <div className="title">
        <h1>Quiz App</h1>
      </div>

      <div className="container">
        <div className="question">
          {Questions[currentQuestion] && (
            <h2>
              {Questions[currentQuestion].id}){" "}
              {Questions[currentQuestion].question}
            </h2>
          )}
        </div>

        <div
          className={`options ${clickedContainer !== null ? "disabled" : ""}`}
        >
          {/* Mapping options */}
          {Questions[currentQuestion]?.options.map((option, index) => (
            <div className="option-container" key={index}>
              <p
                className={clickedContainer === index + 1 ? "para" : ""}
                onClick={() => handleClick(index + 1)}
              >
                {String.fromCharCode(65 + index)}) {option}
              </p>
            </div>
          ))}
        </div>

        <div className="bottom-elem">
          {Questions[currentQuestion] && (
            <h3>
              Question {Questions[currentQuestion].id} of {Questions.length}
            </h3>
          )}

          <button onClick={handleNext}>
            {btnText}
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};
