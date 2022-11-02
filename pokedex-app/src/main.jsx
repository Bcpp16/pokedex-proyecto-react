import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/routes/App'
import Description from './components/routes/Description';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: 'pokemon/:id',  //el id puede ser otro valor del objeto
    element: <Description />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
