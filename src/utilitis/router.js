import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Error from "../components/Error";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Statistics from "../components/Statistics";
import { loaderData } from "../loaders/loaders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    // loader: loaderData,
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
