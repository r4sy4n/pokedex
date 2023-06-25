import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PokemonType = () => {
  const { type } = useParams();
  const [ pokemonData, setPokemonData ] = useState(null);
  const url = `https://pokedex-qu4j.onrender.com`;
  
  useEffect(() => {
    axios.get(`${url}/type/${type}`)
      .then(response => {
        setPokemonData(response.data.pokemons);
      })
      .catch(error => {
        console.log(error);
      });
  }, [type]);
  
  if (!pokemonData) {
    return <h1>Loading...</h1>
  };

  return (
    <>
      <div>
        <h1 className='flex'>Type: {type}</h1>
        <div className='grid'>
        {pokemonData.map((item, index) => {
          return <div className='pokemon__container' key={index}>
              
              <h2>{item.name}</h2>
              <img src={item.img} alt={item.name}></img>
            </div>
          })}
        </div>
      </div>
      <Link to={'/'} className='flex'>
        <button className='btn'>Back</button>
      </Link>
    </>
  )
}

export default PokemonType;