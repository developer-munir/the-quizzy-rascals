import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './utilitis/router';

function App() {
  return (
    <div className="App bg-[#CAD5E2]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
