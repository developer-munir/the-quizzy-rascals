import React, { useState } from "react";
import swal from "sweetalert";
import { EyeOffOutline } from "heroicons-react";
const QuizUi = ({
  quiz,
  setRightCount,
  setWrongCount,
  rightCount,
  wrongCount,
}) => {
  const { question, correctAnswer, options } = quiz;
  const handleQuiz = (e) => {
    if (e === correctAnswer) {
      swal("Good job!", "You are right!", "success");
      setRightCount(rightCount + 1);
    } else {
      swal("Your are wrong!!!");
      setWrongCount(wrongCount + 1);
    }
    setHandleDisable(true);
  };
  const [handleDisable, setHandleDisable] = useState(false);
  const handleRightQuiz = () => {
    swal("Tap button to see the right answer!!!").then(() => {
      swal(`The correct answer is: ${correctAnswer}`);
    });
  };
  return (
    <div className="container mx-auto flex  justify-center">
      <div className="md:w-3/4 w-full md:p-5 mx-2 border my-2 rounded-xl p-2 shadow-lg bg-[#E6425E] text-[#CAD5E2]">
        <div className="flex justify-between align-middle">
          <h1 className="md:text-2xl text-lg font-serif mb-2">{question}</h1>
          <p
            onClick={handleRightQuiz}
            className="cursor-pointer text-[#CAD5E2]"
          >
            <EyeOffOutline></EyeOffOutline>
          </p>
        </div>
        <div>
          {options.map((option, index) => (
            <label
              key={index}
              className="flex align-middle p-3 text-xl hover:bg-red-200 hover:text-black rounded-md font-mono cursor-pointer"
            >
              <input
                type="radio"
                name="quiz"
                value={option.value}
                key={index}
                disabled={handleDisable}
                className="cursor-pointer mr-2 mt-1 radio bg-[#CAD5E2]"
                defaultChecked={option.value === correctAnswer}
                onChange={() => handleQuiz(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizUi;
