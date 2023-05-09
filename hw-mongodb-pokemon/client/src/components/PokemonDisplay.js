import React from 'react';
import PokemonData from './PokemonData';

const PokemonDisplay = ({pokemon}) => {

  return (
    <div className='display__container'>
        {
            pokemon && pokemon.map((item, index) => 
             <PokemonData key={index} catchPokemon={item} />
            ) 
        }
    </div>
  )
}

export default PokemonDisplay;