import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import HOME from './pages/home';
import Html from './pages/html';
import Css from './pages/css';
import JavaScript from './pages/javascript';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HOME/>,
    errorElement: <h1>Sorryyyyyyyy</h1>
  },
  {
    path: "/Html",
    element: <Html/>,
    errorElement: <h1>Sorryyyyyyyy</h1>
  },
  {
    path: "/css",
    element: <Css/>,
    errorElement: <h1>Sorryyyyyyyy</h1>
  },
  {
    path: "/javascript",
    element: <JavaScript/>,
    errorElement: <h1>shite</h1>
  },
  

]);

 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);

 
