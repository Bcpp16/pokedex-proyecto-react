import {useParams} from 'react-router-dom';
import React from 'react'
import './description.css'
import pokemones from '../../data';
// import ProgressBar from 'react-bootstrap/ProgressBar';

function Description() {

    const {id} = useParams();
    const pokemon = pokemones.find((element) =>{
      return element.id == id;
    });


  return (
    <div className="cont" style={{backgroundColor: pokemon.color}}>
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
      {/* <div className='progressBar'>
      <ProgressBar  style={{backgroundColor: pokemon.color}}data-percentage='200' now={pokemon.baseStats.HP} />
      <ProgressBar variant="info" now={pokemon.baseStats.ATK} />
      <ProgressBar variant="warning" now={pokemon.baseStats.DEF} />
      <ProgressBar variant="danger" now={pokemon.baseStats.SATK} />
      <ProgressBar variant="danger" now={pokemon.baseStats.SDEF} />
      <ProgressBar variant="danger" now={pokemon.baseStats.SPD} />
      
    </div> */}
      </div>
    </div>

    
  )
}

export default Description