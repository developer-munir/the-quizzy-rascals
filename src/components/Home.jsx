import React, { useContext } from 'react';
import { quizTopicContext } from './Layout';
import Topic from './Topic';

const Home = () => {
    const quiztopics = useContext(quizTopicContext);
    console.log(quiztopics.data);
    return (
      <div className='container mx-auto p-5 lg:p-0'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5'>
          {quiztopics?.data.map((topic) => (
            <Topic></Topic>
          ))}
        </div>
      </div>
    );
};

export default Home;