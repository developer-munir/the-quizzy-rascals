import React from 'react';
import img from '../images/as9-1.avif'

const Header = () => {
    return (
      <div className="py-5 grid md:grid-cols-2 gap-2">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-serif text-[#E6425E]">
            FREE QUIZ PRACTISE RIGHT IN YOUR BROWSER.
          </h1>
          <p className='font-mono'>
            The Quizzy Rascals makes your event, speech, classroom lecture, or
            church service accessible with real-time captioning.
          </p>
        </div>
        <img data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" src={img} className="w-full rounded-md" alt="" />
      </div>
    );
};

export default Header;