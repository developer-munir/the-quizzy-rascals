import React from 'react';

const QuizUi = ({ quiz }) => {
    console.log(quiz);
    const { question, correctAnswer, options } = quiz;
    return (
      <div className='container mx-auto'>
        <h1>{question}</h1>
        {options.map((option) => (
          <ol>
            <li>{option}</li>
          </ol>
        ))}
      </div>
    );
};

export default QuizUi;