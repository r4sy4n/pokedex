import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import '../App.css'
import PokemonDisplay from './PokemonDisplay';

const ShowPokemon = () => {
  const [ pokemon, setPokemon ] = useState([{name:'' , url:''}]);
  const [ loadMore, setLoadMore ] = useState('');
  const [ loading, setLoading ] = useState(true);
  const [ currentLimit, setCurrentLimit] = useState(20);
  const url = `http://localhost:8000/api/v1/pokemons?limit=${currentLimit}`;
  
  useEffect(() => {
     axios.get(url)
      .then(response => {
        setLoading(false);
        setPokemon(response.data.pokemons);
        setLoadMore(response.data.pokemons);
      })
      .catch(error => {
        console.log(error);
      });
  },[url]);

  const loadMorePokemon = () => {
    axios.get(`http://localhost:8000/api/v1/pokemons?limit=${currentLimit}&offset=0`)
      .then(response => {
        setLoading(false);
        setPokemon([...pokemon, ...response.data.pokemons]);
        setCurrentLimit( currentLimit + 20 );
        setLoadMore(response.data.pokemons);
      })
      .catch(error => {
        console.log(error);
      });
  }

if(loading){
  return <h1 className='loading__screen'>Now Loading.....</h1>
}
  return (
    <div className='pokemon__container'>
      <h1>POKEDEX</h1>
      <PokemonDisplay pokemon={pokemon} />
      <div className='btn__container'>
        {loadMore && <button onClick={ loadMorePokemon } className='btn'><strong>Load More</strong></button>}
      </div>
      
     
    </div>
  )
}

export default ShowPokemon;