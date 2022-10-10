import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

export const quizTopicContext = createContext([]);

const Layout = () => {
    const quiztopics = useLoaderData(quizTopicContext);
    return (
      <quizTopicContext.Provider value={quiztopics}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </quizTopicContext.Provider>
    );
};

export default Layout;