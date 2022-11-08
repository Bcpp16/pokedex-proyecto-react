import React from "react";
import ReactDOM from "react-dom/client";

// ============ IMPORT ROUTE ===============
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ============ IMPORT COMPONENTS ===============
import App from "./App";
import Description from "./components/detail/Description";
import Home from "./components/home/Home";
import ErrorPage from "./components/error/ErrorPage";

// ============ IMPORT STYLE ===============
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";



const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage/>
  },

  {
    path: "app",
    element: <App />,
  },
  {
    path: "pokemon/:id", 
    element: <Description />,
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
