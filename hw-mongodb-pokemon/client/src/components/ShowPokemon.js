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
  const url = `https://pokeapi.co/api/v2/pokemon`;
  
  useEffect(() => {
     axios.get(url)
      .then(response => {
        setLoading(false);
        setPokemon(response.data.results);
        setLoadMore(response.data.next);
      })
      .catch(error => {
        console.log(error);
      });
  },[url]);

  const loadMorePokemon = () => {
    axios.get(loadMore)
      .then(response => {
        setLoading(false);
        setPokemon([...pokemon, ...response.data.results]);
        setLoadMore(response.data.next);
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