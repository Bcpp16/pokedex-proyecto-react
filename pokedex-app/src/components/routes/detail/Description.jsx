import { Link, useParams } from "react-router-dom";
import "./description.css";
import pokemones from "../../../data";
import { useState } from "react";
import ModalStates from "../../modal/Modal";
import { HiArrowLeft, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Description() {
  const [modalShow, setModalShow] = useState(false);

  const { id } = useParams();
  const pokemon = pokemones.find((element) => {
    return element.id == id;
  });

  const indexActual = pokemones.findIndex((element) => {
    return element.id == id;
  });

  return (
    <div
      className="container-descr"
      style={{
        backgroundImage: `linear-gradient(to right, ${pokemon.color}, ${pokemon.bgColor})`,
      }}
    >
      <div className="link-c-1">
        {pokemones[indexActual - 1] ? (
          <Link
            to={`/pokemon/${pokemones[indexActual - 1]?.id}`}
            className="link-coursel"
          >
            <HiChevronLeft />
          </Link>
        ) : (
          <Link
            to={`/pokemon/${pokemones[pokemones.length - 1]?.id}`}
            className="link-coursel"
          >
            <HiChevronLeft />
          </Link>
        )}
      </div>

      <div className="cont-BackBtn">
        <Link to={"/"}>
          <button className="back-Btn">
            <HiArrowLeft /> VOLVER
          </button>
        </Link>
      </div>
      <div className="cont-second">
        <div className="cont-img">
          <img className="img-big" src={`../${pokemon.image}`} alt="pokemon" />
        </div>

        <div className="cont-basic">
          <span className="id-desc">{`# ${pokemon.id}`}</span>

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

          <h2 className="title-name">{pokemon.name.toLocaleUpperCase()}</h2>
          <p className="txt-desc">{pokemon.description}</p>
          <button
            variant="primary"
            onClick={() => setModalShow(true)}
            ba
            style={{ color: pokemon.color }}
            className="btn-states"
          >
            Base states
          </button>
        </div>
        <ModalStates show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <div className="link-c-2">
        {pokemones[indexActual + 1] ? (
          <Link
            to={`/pokemon/${pokemones[indexActual + 1]?.id}`}
            className="link-coursel"
          >
            <HiChevronRight />
          </Link>
        ) : (
          <Link to={`/pokemon/${pokemones[0]?.id}`} className="link-coursel">
            <HiChevronRight />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Description;
