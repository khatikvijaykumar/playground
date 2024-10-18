import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Linear from './Pages/Linear';
import Bubble from './Pages/Bubble';
import Merge from './Pages/Merge';
import Dsaview from './HF/Dsaview';
import Homepage from './HF/Homepage';
import Feature from './HF/Feature';

// ----------------------------------------------------------------
const myrouter = createBrowserRouter(
      createRoutesFromElements(
       <Route path='/' element={<Home />}>
          <Route path='' element={<Homepage />}/>
          <Route path='' element={<Feature />}/>
          <Route path='linear' element={<Linear />}/>
          <Route path='bubble' element={<Bubble />}/>
          <Route path='merge' element={<Merge />}/>
          <Route path='dsa' element={<Dsaview />}>
          
          </Route>
           
       </Route>
)
);
// ---------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myrouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
