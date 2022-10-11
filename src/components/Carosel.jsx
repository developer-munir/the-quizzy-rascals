import React from 'react';
import { Link } from 'react-router-dom';

const Carosel = () => {
    return (
      <div>
        <div className="carousel w-full rounded-xl">
          <div id="item1" className="carousel-item w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" alt='images not found' />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" alt='images not found' />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" alt='images not found' />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" alt='images not found' />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <Link to="#item1" className="btn btn-xs bg-[#E6425E] border-none">
            1
          </Link>
          <Link to="#item2" className="btn btn-xs bg-[#E6425E] border-none">
            2
          </Link>
          <Link to="#item3" className="btn btn-xs bg-[#E6425E] border-none">
            3
          </Link>
          <Link to="#item4" className="btn btn-xs bg-[#E6425E] border-none">
            4
          </Link>
        </div>
      </div>
    );
};

export default Carosel;