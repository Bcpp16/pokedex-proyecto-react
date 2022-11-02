import {useParams} from 'react-router-dom';
import React from 'react'
import './description.css'
import pokemones from '../../data';

function Description() {

    const {id} = useParams();
    const pokemon = pokemones.find((element) =>{
      return element.id == id;
    });


  return (
    <>
    <div className="cont">
      <div className="head">
        <i>icono</i>
        <h2>{pokemon.name}</h2>
        <span>{pokemon.id}</span>
      </div>
      <div className="data">
        <img  src={`../${pokemon.image}`} alt="pokemon" />
        <div className="stats">
          <div>{pokemon.weight}</div>
          <div>{pokemon.height}</div>
          <div>{pokemon.moves}</div>
        </div>
        <div className="type">
          <div className='element'></div>
        </div>
        <h3>About</h3>
        <p>{pokemon.description}</p>
        <h3>Base Stats</h3>
      </div>
    </div>

    </>
  )
}

export default Description