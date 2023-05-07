const express = require('express');
const router = express.Router();

const Pokemon = require('../models/PokemonModel');

router.get( '/', ( request, response ) => {
        // limit the number of documents
    let limit = parseInt(request.query.limit);
        // exec handle promises and executes the query
    Pokemon.find().limit(limit).exec().then( result => {
        if(limit){
        // Get a rate-limited number of pokemons
            response.status( 200 ).send({ pokemons: result });
        }else{ 
        // GET list of all pokemons       
            response.status( 200 ).send({ pokemons: result });
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
            if(pokemon){
                response.status( 200 ).send( pokemon ) ;
            }else {
                response.status( 404 ).send( 'Pokemon not found' );
            }
        });
    };
});

// Get all pokemons that match a type
router.get( '/type/:type', ( request, response ) => { 
    const type = request.params.type.toLowerCase();
    if (type) {
        let firstLetter = type.slice(0, 1);
        let remaining = type.slice(1).toLowerCase();
        let types = firstLetter.toUpperCase() + remaining;
        // $in operator selects the documents where the value of a field equals any value in the specified array
        Pokemon.find({ type: { $in: [ types ] } }).then((pokemons) => {
            if (!pokemons || pokemons.length === 0) {
                response.status( 404 ).send( 'No Pokemon found for this type' );
            }else{
                response.status( 200 ).send({ 
                    count: pokemons.length,
                    pokemons: pokemons 
                });
            } 
        });
    };
});

module.exports = router;