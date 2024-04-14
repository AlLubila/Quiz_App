import "../Styles/Score.css"
export const Score = ({score,setScore, setStart, setLastQuestion, setWelcome}) => {

  //Restart the game
// set: Start to false, lastQuestion to false, score to 0
  const handleRestart = ()=>{
    setStart(false)
    setLastQuestion(false)
    setScore(0)
    setWelcome(true)
  }
    return (
        <>
        <div className="big-container">
        <div className="title">
          <h1>Quiz App</h1>
        </div>

        <div className="container2">
            <div className="text">
            <p>Quiz Completed!</p>
            </div>
           <div className="score">
           <h2>Your score: {score} </h2>
           </div>
            
            <div className="btn-again">
            <button onClick={handleRestart}>Play again
                <span></span>
            </button>
            </div>
           
        </div>
      </div>
        </>
    )
}