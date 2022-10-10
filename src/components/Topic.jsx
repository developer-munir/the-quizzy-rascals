import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  console.log(topic);
  const { name, logo } = topic;
  return (
    <div className="card card-side shadow-xl bg-slate-200 p-2">
      <figure>
        <img src={logo} alt="images not found" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-serif">{name}</h2>
        <p className="font-mono">Click the button to watch on quiz.</p>
        <div className="card-actions">
          <Link>
            <button className="btn btn-primary font-serif">Get start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
