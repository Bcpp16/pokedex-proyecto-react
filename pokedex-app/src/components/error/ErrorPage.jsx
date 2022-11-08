import React from "react";
import "./error404.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="cont">
      <div className="error404">
        <h1 className="sorry">SORRY</h1>
        <h2>404</h2>
        <div>
          <img src="https://img.imgur.com/oqIKUNP.png" alt="poke" />
        </div>

        <h3>Page not found</h3>
        <Link to={"/app"}>
          <button className="btn-back-error">Back Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;