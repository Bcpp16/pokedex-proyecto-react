import React from "react";
import "./error404.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="cont">
      <div className="error404">
        <div className="sorry-cont">
          <h1 className="sorry">SORRY</h1>
        </div>
        <div className="cont-error-img">
          <h2>4</h2>
          <img className="img-error" src="/public/assets/Pokebola.png" />
          <h2>4</h2>
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
