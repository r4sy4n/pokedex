const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 8000;

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

mongoose.connect('mongodb://127.0.0.1:27017/pokemondb');

const baseURL = '/api/v1/pokemons';

const PokemonRoutes = require('./routes/PokemonRoutes');

app.use( baseURL, PokemonRoutes );

app.get( '/', ( request, response ) => {
    response.send({ message: `Express server for Mongodb Pokemon`});
});

app.listen( PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});