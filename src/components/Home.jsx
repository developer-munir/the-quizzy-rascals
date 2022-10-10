import React, { useContext } from 'react';
import Header from './Header';
import { quizTopicContext } from './Layout';
import Topic from './Topic';

const Home = () => {
    const quiztopics = useContext(quizTopicContext);
    return (
        <div className="container mx-auto p-5 lg:p-0">
            <Header></Header>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {quiztopics?.data.map((topic) => (
            <Topic topic={topic} key={topic?.id}></Topic>
          ))}
        </div>
      </div>
    );
};

export default Home;