const express = require('express');
const router = express.Router();

const Pokemon = require('../models/PokemonModel');

router.get( '/', ( request, response ) => {
        // limit the number of documents
    let limit = parseInt(request.query.limit);
        // exec handle promises and executes the query
    Pokemon.find().limit(limit).exec().then( res => {
        if(limit){
        // Get a rate-limited number of pokemons
            response.status( 200 ).send( res );
        }else{ 
        // GET list of all pokemons       
            response.status( 200 ).send({ pokemons: res });
        };
    });
});


module.exports = router;