import React from "react";

import { Link } from "react-router-dom";
import "./main.css";

function Main({ listPokemones }) {
  return (
    <div className="container-main">
      <div className="container-card">
        {listPokemones.length ? (
          listPokemones.map((pokemon) => {
            return (
              <Link to={`pokemon/${pokemon.id}`} className="link">
                <div className="st-card">
                  <div className="id">{`#${pokemon.id}`}</div>
                  <img src={pokemon.image} />

                  <div
                    className="bg-color"
                    style={{ backgroundColor: pokemon.color }}
                  >
                    <div className="nombre">{pokemon.name}</div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p className="txt-main">No se han encontrado Pokemones</p>
        )}
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Main;
