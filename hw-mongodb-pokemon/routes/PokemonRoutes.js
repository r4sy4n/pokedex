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

// Get a pokemon given a name
router.get( '/:name', ( request, response ) => {  
    let name = request.params.name;
    
    if(name){
        let firstLetter = name.slice(0, 1);
        let remaining = name.slice(1).toLowerCase();
        let names = firstLetter.toUpperCase() + remaining;

        Pokemon.findOne({ name : names }).then(pokemon => {
            console.log(pokemon);
            response.status( 200 ).send({ pokemons: pokemon}) ;
        });
    };
});

module.exports = router;