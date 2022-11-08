import React from "react";
import { Link } from "react-router-dom";
import Stras from "../background/Stars";
import { GoMarkGithub } from "react-icons/go";
import "./home.css";

function Home() {
  return (
    <>
      <Stras />
      <div className="cont-home">
        <div className="header-home">

          <div className="cont-logo-home">
              <img className="img-logo-home" src="/public/assets/Pokebola.png" />
              <span className="txt-logo-home">Pokédex</span>
            </div>

            <div className="cont-icon">
              <a
                className="icon-git"
                href="https://github.com/Bcpp16/pokedex-proyecto-react"
                target="_blank"
              >
                <GoMarkGithub />
              </a>
            </div>
          
        </div>

        <Link to={"/app"}>
          <div className="container-btn-back">
            <button className="btn-back-home">Ir a la Pókedex</button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Home;
