import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizUi from "./QuizUi";

const Quiz = () => {
  const loadQuiz = useLoaderData();
  return (
    <div>
      <h1 className="text-center text-2xl font-serif">React Quizes</h1>
      {loadQuiz?.data?.questions.map((quiz) => (
        <QuizUi key={quiz?.id} quiz={quiz}></QuizUi>
      ))}
    </div>
  );
};

export default Quiz;
