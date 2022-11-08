import React from "react";
import { Link } from "react-router-dom";

//==========IMPORT STYLE===================
import Stras from "../background/Stars";
import { GoMarkGithub } from "react-icons/go";
import "./home.css";

function Home() {
  return (
    <>
      <Stras />

      <div className="cont-home">

        <article className="header-home">

          <section className="cont-logo-home">
            <img className="img-logo-home" src="/public/assets/Pokebola.png" />
            <span className="txt-logo-home">Pokédex</span>
          </section>

          <section className="cont-icon">
            <a className="icon-git" href="https://github.com/Bcpp16/pokedex-proyecto-react" target="_blank">
              <GoMarkGithub />
            </a>
          </section>

        </article>

        <article className="container-btn-back">
          <h2 className="txt-welcome">
            Welcome to the react integrator project
          </h2>
          <Link to={"/app"}>
            <button className="btn-back-home">GO TO THE POKÉDEX</button>
          </Link>
        </article>

        <article className="cont-footer-home">
          <a className="link-names" href="https://github.com/ArianOC" target="_blank">Arian Ortiz</a>

          <a className="link-names" href="https://github.com/Bcpp16" target="_blank">Bruna Ceppa</a>

          <a className="link-names" href="https://github.com/Franro212" target="_blank">Franco Rossi</a>
        </article>

      </div>
    </>
  );
}

export default Home;
