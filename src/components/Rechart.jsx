import React, { useContext } from 'react';

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { quizTopicContext } from './Layout';

const Rechart = () => {
    const quiz = useContext(quizTopicContext);
    return (
      <div className="py-12 px-2 h-[650px] md:h-[400px] ">
        <h1 className="text-xl font-mono text-[#E6425E]">Quizes</h1>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={quiz.data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="total"
              stroke="#E6425E"
              fill="#E6425E"
            />
          </AreaChart>
        </ResponsiveContainer>
        <h1 className="text-xl font-mono text-[#E6425E]">Topics</h1>
      </div>
    );
};

export default Rechart;
