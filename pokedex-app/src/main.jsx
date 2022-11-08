import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/routes/App";
import Description from "./components/routes/detail/Description";
import Home from "./components/home/Home";
import ErrorPage from "./components/Error-page";


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home />,
  },
  
  {
    path: "app",
    element: <App />,
  },
  {
    path: "pokemon/:id", 
    element: <Description />,
  },

  {
    path: "*",
    element: <ErrorPage/>,
    errorElement: <ErrorPage/>, 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
