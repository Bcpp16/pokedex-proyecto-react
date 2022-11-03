import {useParams} from 'react-router-dom';

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
        <span  className='id-desc'>{ `# ${pokemon.id}`}</span>
        
        <div className='cont-type'>
        <div className='type1' style={{backgroundColor:pokemon.color}}>{pokemon.element.type1}</div> 
        <div className='type2' style={{backgroundColor:pokemon.element.color2}}>{pokemon.element.type2}</div>
        </div>
      
        <h2 className='title-name'>{pokemon.name.toLocaleUpperCase()}</h2>
        <p className='txt-desc'>{pokemon.description}</p>
        <button style={{backgroundColor:pokemon.color}} className='btn-states'>Base states</button>
      </div>

    </div>
    </div>
    

    
  )
}

export default Description