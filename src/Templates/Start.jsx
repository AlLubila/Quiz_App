import '../Styles/Start.css'

export const Start = ({handleStart}) => {


    return (
        <>
        <div className="big-container">

            <div className="title">
                 <h1>Quiz App</h1>
            </div>
          
          <div className="container">
            <p>Welcome to the quiz</p>
            <div className="btn-container">
            <button onClick={handleStart}>Start quiz
                <span></span>
            </button>
            </div>
            
          </div>
        </div>
       
        </>
    )
}