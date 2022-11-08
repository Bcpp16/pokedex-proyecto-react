import React, { useEffect, useState} from "react";

import { useParams,} from "react-router-dom";

// ============ IMPORTS COMPONENTS ===============
import Modal from "react-bootstrap/Modal";
import { FaRulerVertical } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import "./modal.css";


export default function ModalStates(props) {
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
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="rounded-4"
    >
      <Modal.Header className="border-0 ">
        <div className="container-btn-close"></div>
        <button className="close-Btn" onClick={props.onHide}>X</button>
      </Modal.Header>

      <Modal.Body>

         {/* ARTICLE WITH MODAL INFORMATION */}
        <div className="modal-Cont">
          <article className="cont-Info">

            <img className="img-Poke img-Modal" src={`../${pokemon?.image}`} />
            <h1>{pokemon?.name}</h1>

            <section className="cont-type">
              <div className="type1" style={{ backgroundColor: pokemon?.color }}>
                {pokemon?.element.type1}
              </div>
              <div
                className="type2"
                style={{ backgroundColor: pokemon?.element.color2 }}
              >
                {pokemon?.element.type2}
              </div>
            </section>
            
            {/* DATA HEIGHT WEIGHT MOVES */}

            <section className="cont-Data">

              <div className="weight-height">
                <div className="weight">
                  <GiWeight />
                  {pokemon?.weight} <br />
                  <span>WEIGHT</span>
                </div>

                <div className="height">
                  <FaRulerVertical />
                  {pokemon?.height} <br />
                  <span>HEIGHT</span>
                </div>
              </div>

              <div className="moves">
                <MdOutlineCatchingPokemon />
                <span>MOVES</span>
                {pokemon?.moves}
              </div>

            </section>
          </article>

          {/* SECTION PROGRESS BAR */}

          <section className="cont-Stats">

            <label for="ATK">ATK</label>
            <progress id="ATK" className="progress" label={pokemon?.baseStats.ATK} max="200" value={pokemon?.baseStats.ATK} />

            <label for="DEF">DEF</label>
            <progress id="DEF" className="progress" max="200" value={pokemon?.baseStats.DEF}/>

            <label for="HP">HP</label>
            <progress id="HP" className="progress" max="200" value={pokemon?.baseStats.HP}/>

            <label for="SATK">SATK</label>
            <progress id="SATK" className="progress"  max="200"value={pokemon?.baseStats.SATK}/>

            <label for="SDEF">SDEF</label>
            <progress id="SDEF" className="progress" max="200" value={pokemon?.baseStats.SDEF}/>

            <label for="SPD">SPD</label>
            <progress id="SPD" className="progress" max="200" value={pokemon?.baseStats.SPD}/> 

          </section>

        </div>
      </Modal.Body>
    </Modal>
  );
}
