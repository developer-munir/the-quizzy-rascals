import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizUi from "./QuizUi";

const Quiz = () => {
  const loadQuiz = useLoaderData();
  const [rightCount, setRightCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  return (
    <div>
      <div className="flex flex-col text-center md:flex-row align-middle justify-center text-2xl font-serif text-[#E6425E] my-5">
        <span className="mr-2 mt-3 lg:mt-0">
          Quize Length : {loadQuiz?.data?.questions.length}
        </span>
        <span className="mr-2 mt-3 lg:mt-0">Right Answer :{rightCount}</span>
        <span className="mr-2 mt-3 lg:mt-0">Wrong Answer :{wrongCount}</span>
      </div>
      {loadQuiz?.data?.questions.map((quiz) => (
        <QuizUi
          key={quiz?.id}
          quiz={quiz}
          setRightCount={setRightCount}
          rightCount={rightCount}
          wrongCount={wrongCount}
          setWrongCount={setWrongCount}
        ></QuizUi>
      ))}
    </div>
  );
};

export default Quiz;
