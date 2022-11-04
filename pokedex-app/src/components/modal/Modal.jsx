import React from "react";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import pokemones from "../../data";
import "./modal.css";

export default function ModalStates(props) {
  const { id } = useParams();
  const pokemon = pokemones.find((element) => {
    return element.id == id;
  });
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="rounded-4"
    >
      <Modal.Header className="border-0" closeButton></Modal.Header>
      <Modal.Body>
        <div className="modal-Cont">
          <div className="cont-Info">
            <img className="img-Poke" src={`../${pokemon.image}`} />
            <div className="cont-type">
              <div className="type1" style={{ backgroundColor: pokemon.color }}>
                {pokemon.element.type1}
              </div>
              <div
                className="type2"
                style={{ backgroundColor: pokemon.element.color2 }}
              >
                {pokemon.element.type2}
              </div>
            </div>
            <div>
              <span>{pokemon.weight}</span>
              <span>{pokemon.height}</span>
              <span>{pokemon.moves}</span>
            </div>
          </div>

          <div className="cont-Stats">
            <label for="ATK">ATK</label>
            <progress
              id="ATK"
              className="progress"
              max="200"
              style={{ backgroundColor: pokemon.color }}
              value={pokemon.baseStats.ATK}
            ></progress>
            <label for="DEF">DEF</label>
            <progress
              id="DEF"
              className="progress"
              max="200"
              style={{ backgroundColor: pokemon.color }}
              value={pokemon.baseStats.DEF}
            ></progress>
            <label for="HP">HP</label>
            <progress
              id="HP"
              className="progress"
              max="200"
              style={{ backgroundColor: pokemon.color }}
              value={pokemon.baseStats.ATK}
            ></progress>
            <label for="SATK">SATK</label>
            <progress
              id="SATK"
              className="progress"
              max="200"
              style={{ backgroundColor: pokemon.color }}
              value={pokemon.baseStats.ATK}
            ></progress>
            <label for="SATK">SATK</label>
            <progress
              id="SATK"
              className="progress"
              max="200"
              style={{ backgroundColor: pokemon.color }}
              value={pokemon.baseStats.ATK}
            ></progress>
            <label for="SPD">SPD</label>
            <progress
              id="SPD"
              className="progress"
              max="200"
              style={{ backgroundColor: pokemon.color }}
              value={pokemon.baseStats.ATK}
            ></progress>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
