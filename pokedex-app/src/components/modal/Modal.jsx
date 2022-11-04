import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import {useParams} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import pokemones from '../../data';
  
    
    export default function ModalStates(props) {

    const {id} = useParams();
    const pokemon = pokemones.find((element) =>{
      return element.id == id;
    });
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div>
        <img src="/"/>
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
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

