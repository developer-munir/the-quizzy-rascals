import React from "react";
import swal from 'sweetalert';
import { Sparkles } from "heroicons-react";
const QuizUi = ({ quiz }) => {
  const { question, correctAnswer, options } = quiz;
    const handleQuiz = (e) => {
        if (e === correctAnswer) {
            swal("Good job!", "You are right!", "success");
        } else {
          swal('Your are wrong!!');
      }
  };
  const handleRightQuiz = () => {
    swal("Click on the button to see the right answer.").then((value) => {
      swal(`The correct answer is: ${correctAnswer}`);
    });
  }
  return (
    <div className="container mx-auto flex  justify-center text-[#E6425E]">
      <div className="md:w-3/4 w-full md:p-5 mx-2 border my-2 rounded-xl p-2 shadow-lg border-[#E6425E]">
        <div className="flex justify-between align-middle">
          <h1 className="md:text-2xl text-lg font-serif mb-2">{question}</h1>
          <p
            onClick={handleRightQuiz}
            className="cursor-pointer text-[#E6425E]"
          >
            <Sparkles></Sparkles>
          </p>
        </div>

        {options.map((option, index) => (
          <label
            key={index}
            className="flex align-middle p-3 text-xl hover:bg-red-100 rounded-md"
          >
            <input
              type="radio"
              name="quiz"
              value={option.value}
              key={index}
              className=" checked:bg-red-500 cursor-pointer mr-2 mt-1 radio"
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
