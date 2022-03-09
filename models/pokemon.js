const mongoose = require('mongoose');

const pokeSchema = new mongoose.Schema({
    pokeName:  { type: String, required: true },
    imageURL:  { type: String, required: true }
});

const Pokemon = mongoose.model('Pokemon', pokeSchema);

module.exports = Pokemon;