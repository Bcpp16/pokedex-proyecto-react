import React from 'react'

import {Link} from 'react-router-dom';
import './main.css'

function Main({listPokemones}) {


  return (
    <>

    <div 
    className="container-card">
      {listPokemones.length ? (
        listPokemones.map((pokemon) => {
          return (
            <div className="st-card" style={{backgroundColor: pokemon.color}}>
            <div className='back'>

              <div className='id'>{`#${pokemon.id}`}</div>
  <Link to={`pokemon/${pokemon.id}`}>
              <img style={{color: pokemon.color}} src={pokemon.image} />
  </Link>
            </div>
              


              <div className='nombre' >{pokemon.name}</div>
            </div>
          );
        })
      ) : (
        <p className="txt-main">No se han encontrado Pokemones</p>
      )}
    </div>
    </>
  )
}

export default Main;