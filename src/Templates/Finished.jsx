import "../Styles/Finished.css"
export const Finished = () => {
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
           <h2>Your score: 4</h2>
           </div>
            
            <div className="btn-again">
            <button>Play again
                <span></span>
            </button>
            </div>
           
        </div>
      </div>
        </>
    )
}