import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PokemonDetails = () => {
  const { name } = useParams();
  const [ pokemonData, setPokemonData ] = useState(null);
  const url = `https://pokedex-qu4j.onrender.com/api/v1/pokemons`;
  
  useEffect(() => {
    axios.get(`${url}/${name}`)
      .then(response => {
        setPokemonData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [name]);
  // console.log(pokemonData)
  if (!pokemonData) {
    return <h1>Loading...</h1>
  };

  return (
    <div className='details'>
      <h1>{pokemonData.name.toUpperCase()}</h1>
      <img src={pokemonData.img} alt={pokemonData.name}></img>
      <p>Type: {pokemonData.type.map((item, index) => {
        return <span key={index}>{item}</span>
      })}</p>
      <p>Weight: {pokemonData.misc.weight}</p>
      <p>Height: {pokemonData.misc.height}</p>
      <Link to={'/'}>
        <button className='btn'>Back</button>
      </Link>
    </div>
  )
}

export default PokemonDetails;