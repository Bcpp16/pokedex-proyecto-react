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

    <div className='container-descr' style={{backgroundImage: `linear-gradient(to right, ${pokemon.color}, ${pokemon.bgColor})`}}>

    <div className='cont-second'>

      <div className='cont-img'>
        <img className='img-big' src={`../${pokemon.image}`} alt="pokemon" />
      </div>

      <div className='cont-basic'>
        <span className='id-desc'>{ `# ${pokemon.id}`}</span>
        <div className='type1'>{pokemon.element.type1}</div>
        <div>{pokemon.element.type2}</div>
        <h2 className='title-name'>{pokemon.name}</h2>
        <p className='txt-desc'>{pokemon.description}</p>
      </div>

    </div>
    </div>
    

    
  )
}

export default Description