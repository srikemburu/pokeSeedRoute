require('dotenv').config()
// Import the express library here
const express = require('express');

// Instantiate the app here
const app = express();

//NOTE: it must start with ./ if it's just a file, not an NPM package
const pokemon = require('./models/pokemon.js');
// const methodOverride = require('method-override')
const PORT = process.env.PORT || 3001
const mongoose = require('mongoose')

//This is called 'middleware'. Be sure to put it at the top of your server.js file
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
// Should be placed near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));
// app.use(methodOverride('_method'));

app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'

//view engine must be above the routes
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/pokemon', function (req, res) {
  pokemon.find({}, (error, allPokemons) => {
    res.render('Index', {
      pokemon: allPokemons
    })
  })
})

//create a page that will allow us to create a new pokemon 
app.get('/pokemon/new', (req,res)=>{
    res.render('New')
  })

//form POST 
app.post('/pokemon/', (req, res)=>{
    pokemon.create(req.body, (error, createdPokemon)=>{
    res.redirect('/Index')    //send the user back to /pokemon
    })  
  })

//show route
app.get('/pokemon/:id', function(req, res){
    pokemon.findById(req.params.id, (err, foundPokemon)=>{
      res.render('Show', {pokemon:foundPokemon})
    })
})

  //connect to mongo database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

app.listen(PORT, () => {
  console.log("listening on port ", PORT)
})