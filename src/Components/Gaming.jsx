import "../Styles/Gaming.css";

export const Gaming = () => {
  return (
    <>
      <div className="big-container">
        <div className="title">
          <h1>Quiz App</h1>
        </div>

        <div className="container">
          <div className="time">
            <p>Time remaining: 10</p>
          </div>
          <div className="question">
            <h2>1) What is the capital of DR Congo</h2>
          </div>

          <div className="options">
            <div className="option-container">
              <p>A) Kinshasa</p>
            </div>
            <div className="option-container">
              <p>B) Nairobi</p>
            </div>
            <div className="option-container">
              <p>C) Johannesburg</p>
            </div>
            <div className="option-container">
              <p>D) Cairo</p>
            </div>
          </div>
          <div className="bottom-elem">
            <h3>Question 1 of 5</h3>
            <button>Start quiz
                <span></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
