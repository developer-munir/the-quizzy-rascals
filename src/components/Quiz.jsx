import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizUi from "./QuizUi";

const Quiz = () => {
  const loadQuiz = useLoaderData();
  return (
    <div>
      {loadQuiz?.data?.questions.map((quiz) => (
        <QuizUi key={quiz.id} quiz={quiz}></QuizUi>
      ))}
    </div>
  );
};

export default Quiz;
