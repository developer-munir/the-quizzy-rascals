import React from "react";

const QuizUi = ({ quiz }) => {
  // console.log(quiz.options);
  const { question, correctAnswer, options } = quiz;
    const handleQuiz = (e) => {
        if (e === correctAnswer) {
            alert('right');
        } else {
            alert('wrong')
      }
  };
  return (
    <div className="container mx-auto flex  justify-center">
      <div className="md:w-3/4 w-full md:p-5 mx-2 border my-2 rounded-xl p-2">
        <h1 className="md:text-2xl text-lg font-serif">{question}</h1>
        {options.map((option, index) => (
          <label key={index} className="flex align-middle p-3">
            <input
              type="radio"
              name="quiz"
              value={option.value}
              key={index}
              className="radio radio-accent mr-2"
              defaultChecked={option.value === correctAnswer}
              onChange={() => handleQuiz(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizUi;
