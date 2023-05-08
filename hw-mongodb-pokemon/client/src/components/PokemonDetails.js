import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PokemonDetails = () => {
  const { name } = useParams();
  const [ pokemonData, setPokemonData ] = useState(null);
  const url = `https://pokeapi.co/api/v2/pokemon`;
  
  useEffect(() => {
    axios.get(`${url}/${name}`)
      .then(response => {
        setPokemonData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [name]);

  if (!pokemonData) {
    return <h1>Loading...</h1>
  };

  return (
    <div>
      <h1>{pokemonData.name.toUpperCase()}</h1>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name}></img>
      <p>Type: {pokemonData.types.map((item, index) => {
        return <span key={index}>{item.type.name} </span>
      })}</p>
      <p>Weight: {pokemonData.weight}</p>
      <p>Height: {pokemonData.height}</p>
      <Link to={'/'}>
        <button>Back</button>
      </Link>
    </div>
  )
}

export default PokemonDetails;