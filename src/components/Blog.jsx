import React from 'react';

const Blog = () => {
    return (
      <div className="text-center">
        <span className="font-serif text-[#E6425E] text-2xl border-b-2 border-[#E6425E]">
          Questions
        </span>
        <div className="w-3/4 mx-auto my-5">
          <h5 className="font-serif text-[#E6425E]">
            Qs 1: what is the perpus of react router?
          </h5>
          <p className="font-mono">
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL. Let us create a simple application to React to
            understand how the React Router works.
          </p>
        </div>
        <div className="w-3/4 mx-auto my-5">
          <h5 className="font-serif text-[#E6425E]">
            Qs 2: How does context api work?
          </h5>
          <p className="font-mono">
            The way Context API work is that we create a context using
            React.createContext () and provide it at the top of our components
            tree by using a once we have provided the context at the top of our
            components tree it is accessible at every level inside that tree. We
            can then consume its value with or useContext hook.
          </p>
        </div>
        <div className="w-3/4 mx-auto my-5">
                <h5 className="font-serif text-[#E6425E]">
                    Qs 3: what is usehref ?</h5>
          <p className="font-mono">
            The useRef hook in react is used to create a reference to an HTML
            element. Most widely used scenario is when we have form elements and
            we need to reference these form elements to either print their value
            or focus these elements etc.
          </p>
        </div>
      </div>
    );
};

export default Blog;