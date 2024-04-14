import "./index.css";
import { Start } from "./Templates/Start";
import { Gaming } from "./Templates/Gaming";
import { Score } from "./Templates/Score";
import { useState } from "react";

export const App = () => {
  // Set initially true welcome state
  const [welcome, setWelcome] = useState(true);

  // Set initially false start state
  const [start, setStart] = useState(false);

  // Set initially lastQuestion to false
  const [lastQuestion, setLastQuestion] = useState(false);

  // Set initially score to 0
  const [score, setScore] = useState(0);

  // Start the game
  const handleStart = () => {
    // set false welcome state to hide START COMPONENT
    setWelcome(false);

    // set true start state to make appear GAMING COMPONENT
    setStart(true);
  };

  return (
    <>
      {welcome && <Start handleStart={handleStart} />}
      {start && (
        <Gaming
          setStart={setStart}
          setLastQuestion={setLastQuestion}
          score={score}
          setScore={setScore}
        />
      )}
      {lastQuestion && (
        <Score
          score={score}
          setScore={setScore}
          setStart={setStart}
          setLastQuestion={setLastQuestion}
          setWelcome={setWelcome}
        />
      )}
    </>
  );
};
