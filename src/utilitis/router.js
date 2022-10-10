import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Error from "../components/Error";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Quiz from "../components/Quiz";
import Statistics from "../components/Statistics";
import { loaderData, loadQuiz } from "../loaders/loaders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    loader: loaderData,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
        },
        {
            path: "/quiz/:quizId",
            loader: async({ params }) =>{
                return fetch(
                  `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
                );
            },
            element:<Quiz></Quiz>
        },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
