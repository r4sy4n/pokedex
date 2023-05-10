import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PokemonType = () => {
  const { type } = useParams();
  const [ pokemonData, setPokemonData ] = useState(null);
  const url = `http://localhost:8000/api/v1/pokemons`;
  
  useEffect(() => {
    axios.get(`${url}/type/${type}`)
      .then(response => {
        setPokemonData(response.data.pokemons);
        console.log(response.data.pokemons)
      })
      .catch(error => {
        console.log(error);
      });
  }, [type]);
  
  if (!pokemonData) {
    return <h1>Loading...</h1>
  };

  return (
    <div>
       {pokemonData.map((item, index) => {
         return <div className='pokemon__container' key={index}>
            <h1>Type:{item.type}</h1>
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name}></img>
            <span>{item.type}</span>
          </div>
        })};
      <Link to={'/'}>
        <button>Back</button>
      </Link>
    </div>
  )
}

export default PokemonType;