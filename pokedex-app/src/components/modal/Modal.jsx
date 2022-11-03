import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

import pokemones from '../../data';

function Modal() {
    const {id} = useParams();
    const pokemon = pokemones.find((element) =>{
      return element.id == id;
    });
  return (
    <div>
    <div>
        <img src={pokemon.image}/>
        <p>{pokemon.id}</p>
        <h2>{pokemon.name}</h2>
        <div className='cont-type'>
        <div className='type1' style={{backgroundColor:pokemon.color}}>{pokemon.element.type1}</div> 
        <div className='type2' style={{backgroundColor:pokemon.element.color2}}>{pokemon.element.type2}</div>
        </div>
        
    </div>

    <div>
<ProgressBar now={pokemon.baseStats.ATK}/>
<ProgressBar now={pokemon.baseStats.DEF}/>
<ProgressBar now={pokemon.baseStats.HP}/>
<ProgressBar now={pokemon.baseStats.SATK}/>
<ProgressBar now={pokemon.baseStats.SDEF}/>
<ProgressBar now={pokemon.baseStats.SPD}/>
    </div>
    </div>
  )
}

export default Modal