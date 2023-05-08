import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonData = ({catchPokemon}) => {
    
    const [ catchPokemonData, setCatchPokemonData] = useState({
      name: '',
      img: '',
      type: '',
    });

    const getPokemonData = (url) =>{
      axios.get(url)
        .then(response => {
          setCatchPokemonData({
            name: response.data.name,
            img: response.data.sprites.front_default,
            type: response.data.types.map((item, index) => { 
               return <li key={index} className="list__name">{item.type.name.toUpperCase()}</li>
            })
          })
        })
        .catch(error => {
          console.log(error);
        });
    };

  useEffect(() => {
    getPokemonData(catchPokemon.url);
  });

  return (
    <div  className='img__container'>
      <h3>{catchPokemonData.name.toUpperCase()}</h3>
      <img src={catchPokemonData.img} alt=''></img>
      <p className='type__container'>Type {catchPokemonData.type}</p> 
    </div>
  )
}

export default PokemonData;
