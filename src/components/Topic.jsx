import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { name, logo,id} = topic;
  return (
    <div
      className="card card-side shadow-xl bg-slate-200 p-2"
      data-aos="zoom-in"
    >
      <figure>
        <img src={logo} alt="images not found" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-serif text-[#E6425E]">{name}</h2>
        <p className="font-mono">Click the button to watch on quiz.</p>
        <div className="card-actions">
          <Link to={`/quiz/${id}`}>
            <button className="px-4 py-2 rounded-lg cursor-pointer text-[#CAD5E2] bg-[#E6425E] font-serif">
              Get start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
