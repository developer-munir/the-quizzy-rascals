import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './utilitis/router';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
   useEffect(() => {
     AOS.init();
     AOS.refresh();
   }, []);
  return (
    <div className="App bg-[#CAD5E2] overflow-hidden">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
