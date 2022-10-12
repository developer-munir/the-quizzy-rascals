import { EmojiSad } from "heroicons-react";
import { Link } from "react-router-dom";
import React from "react";

const Error = () => {
  return (
    <div className="h-[100vh] text-center flex items-center justify-center">
      <div className="uppercase font-serif  w-full my-3">
        <div className="flex justify-center">
          <p>
            <EmojiSad size={50}></EmojiSad>
          </p>
          <h1 className="mb-5 text-5xl">ops!!404 not found</h1>
        </div>
        <Link to={"/"}>
          <button className="px-4 py-3 rounded-lg cursor-pointer text-[#CAD5E2] bg-[#E6425E] font-serif">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
