//=========IMPORT HOOKS ==================
import { useEffect, useState } from "react";

//=========IMPORT ROUTER ==================
import { Link, useParams} from "react-router-dom";

//============IMPORT STYLE=================
import "./description.css";
import ModalStates from "../modal/Modal";
import { HiArrowLeft, HiChevronLeft, HiChevronRight } from "react-icons/hi2";



function Description() {
  const [modalShow, setModalShow] = useState(false);
  const [pokemones, setPokemones] = useState ([]);

  useEffect(()=>{
    fetch("http://localhost:3000/pokemones",{
      method:"GET",
      headers: {"Content-Type": "application/json"},
    })
    .then((response)=> response.json())
    .then((data) => {
      setPokemones(data);
    })
    .catch((error)=>{
      alert(error);
    });
  }, []);


  const { id } = useParams();
  const pokemon = pokemones?.find((element) => {
    return element.id == id;
  });

  const indexActual = pokemones?.findIndex((element) => {
    return element.id == id;
  });

  return (
    <div
      className="container-descr"
      style={{backgroundImage: `linear-gradient(to right, ${pokemon?.color}, ${pokemon?.bgColor})`,}}
      >

      <article className="link-c-1">
        {pokemones[indexActual - 1] ? (
          <Link to={`/pokemon/${pokemones[indexActual - 1]?.id}`} className="link-coursel">
            <HiChevronLeft />
          </Link>
        ) : ( 
          <Link to={`/pokemon/${pokemones[pokemones.length - 1]?.id}`} className="link-coursel">
            <HiChevronLeft />
          </Link>
        )}

      </article>

      <section className="cont-BackBtn">
        <Link to={"/app"}>
          <button className="back-Btn">
            <HiArrowLeft /> GO BACK
          </button>
        </Link>
      </section>

      <article className="cont-second">
        <div className="cont-img">
          <img className="img-big" src={`../${pokemon?.image}`} alt="pokemon" />
        </div>

        <article className="cont-basic">
          <span className="id-desc">{`# ${pokemon?.id}`}</span>

          <section className="cont-type">

            <div className="type1" style={{ backgroundColor: pokemon?.color }}>
              {pokemon?.element.type1}
            </div>

            <div className="type2" style={{ backgroundColor: pokemon?.element.color2 }}>
              {pokemon?.element.type2}
            </div>

          </section>

          <h2 className="title-name">{pokemon?.name.toLocaleUpperCase()}</h2>
          <p className="txt-desc">{pokemon?.description}</p>
          <button
            variant="primary"
            onClick={() => setModalShow(true)}
            style={{ color: pokemon?.color }}
            className="btn-states"
          >
            Base states
          </button>
        </article>

        <ModalStates show={modalShow} onHide={() => setModalShow(false)} />
      </article>

      <section className="link-c-2">
        {pokemones[indexActual + 1] ? (
          <Link to={`/pokemon/${pokemones[indexActual + 1]?.id}`} className="link-coursel">
            <HiChevronRight />
          </Link>
        ) : (
          <Link to={`/pokemon/${pokemones[0]?.id}`} className="link-coursel">
            <HiChevronRight />
          </Link>
        )}
      </section>
    </div>
  );
}

export default Description;
