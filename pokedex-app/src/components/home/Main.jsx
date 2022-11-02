import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Main({listPokemones}) {


  return (
    <>
    <div 
    className="container-card">
      {listPokemones.length ? (
        listPokemones.map((pokemon) => {
          return (
            <div className="st-card" style={{backgroundColor: pokemon.color}}>
              <img  src={pokemon.image} />
              <div>{pokemon.name}</div>
              <div>{`#${pokemon.id}`}</div>
              

              <Link to={`pokemon/${pokemon.id}`}><button className="btnCard">Ver más</button></Link>
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