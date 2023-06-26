require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
const Secret_Password = process.env.Secret_Password;

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

mongoose.connect(`mongodb+srv://russellramiro:${Secret_Password}@cluster0.rz5gupu.mongodb.net//pokemondb`);

const baseURL = '/api/v1/pokemons';

const PokemonRoutes = require('./routes/PokemonRoutes');

app.use( baseURL, PokemonRoutes );

app.get( '/', ( request, response ) => {
    response.send({ message: `Express server for Mongodb Pokemon`});
});

app.listen( PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});