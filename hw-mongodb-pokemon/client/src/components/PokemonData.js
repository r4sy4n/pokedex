import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PokemonData = ({catchPokemon}) => {
  const navigate = useNavigate();
  const [ pokemonType, setPokemonType ] = useState([]);
  const pokeType = (type) => {
    axios.get(`http://localhost:8000/api/v1/pokemons/type/${type}`)
    .then( response => {
      console.log(response.data)
      navigate(`/pokemon/type/${catchPokemon.type}`)
      setPokemonType(response.data);
    })
  }
  return (
    <div  className='img__container'>
       <Link to={`/pokemon/${catchPokemon.name}`}>
        <h3>{catchPokemon.name.toUpperCase()}</h3>
      </Link>
      <img src={catchPokemon.img} alt={catchPokemon.name}></img>
      <p className='type__container' >Type {catchPokemon.type.map((item, index) => { 
               return <li onClick={ () => { pokeType(item) } } key={index} className="list__name">{item}</li>})}</p> 
    </div>
  )
}

export default PokemonData;
