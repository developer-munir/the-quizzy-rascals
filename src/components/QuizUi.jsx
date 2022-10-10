import React from 'react';

const QuizUi = ({ quiz }) => {
    // console.log(quiz);
    const { question, correctAnswer, options } = quiz;
    return (
      <div className="container mx-auto flex  justify-center">
        <div className="md:w-3/4 md:p-5 mx-2 border my-2 rounded-xl p-2">
          <h1 className='md:text-2xl text-lg font-serif'>{question}</h1>
          {options.map((option) => (
            <div className="flex align-middle p-3">
              <input
                type="radio"
                name="radio-4"
                className="radio radio-accent"
                checked
              />
              <p className='ml-2 md:text-xl font-mono'>{option}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default QuizUi;