import { useEffect, useRef, useState } from "react";
import "../Styles/Gaming.css";
import { Questions } from "../Components/Questions";

export const Gaming = ({setLastQuestion}) => {
  // change background if option is selected
  const [clickedContainer, setclickedContainer] = useState(null);

  const handleClick = (containerId) => {
    setclickedContainer(containerId);
  };

  // To move to next question after button clicked
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [btnText, setBtnText] = useState("Next question")
 useEffect(()=>{
  if (Questions[currentQuestion].id === Questions.length - 1) {
    setBtnText("Submit")
  }
  if (btnText === "Submit") {
    setLastQuestion(true)
  }
 },[currentQuestion])


  const handleNext = () => {
    setclickedContainer(null)
    setCurrentQuestion(currentQuestion + 1)
   
  }



  return (
    <>
      <div className="big-container">
        <div className="title">
          <h1>Quiz App</h1>
        </div>

        <div className="container">
          <div className="question">
            <h2>{Questions[currentQuestion].id}) {Questions[currentQuestion].question}</h2>
          </div>

          {/* make options block disable after one selected */}
          <div
            className={`options ${clickedContainer !== null ? "disabled" : ""}`}
          >
            <div className="option-container">
              <p
                className={clickedContainer === 1 ? "para" : ""}
                onClick={() => handleClick(1)}
              >
                A) {Questions[currentQuestion].options[0]}
              </p>
            </div>
            <div className="option-container">
              <p
                className={clickedContainer === 2 ? "para" : ""}
                onClick={() => handleClick(2)}
              >
                B) {Questions[currentQuestion].options[1]}
              </p>
            </div>
            <div className="option-container">
              <p
                className={clickedContainer === 3 ? "para" : ""}
                onClick={() => handleClick(3)}
              >
                C) {Questions[currentQuestion].options[2]}
              </p>
            </div>
            <div className="option-container">
              <p
                className={clickedContainer === 4 ? "para" : ""}
                onClick={() => handleClick(4)}
              >
                D) {Questions[currentQuestion].options[3]}
              </p>
            </div>
          </div>
          <div className="bottom-elem">
            <h3>Question {Questions[currentQuestion].id} of {Questions.length}</h3>
            <button onClick={handleNext}>
              {btnText}
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};