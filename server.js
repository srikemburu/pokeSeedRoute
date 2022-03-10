require('dotenv').config()
// Import the express library here
const express = require('express');

// Instantiate the app here
const app = express();

//NOTE: it must start with ./ if it's just a file, not an NPM package
const pokemon = require('./models/pokemon.js');

// install method-override npm package to make DELETE work
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')

//This is called 'middleware'. Be sure to put it at the top of your server.js file
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
// Should be placed near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));

app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'

//view engine must be above the routes
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/pokemon/seed', (req, res)=>{
  pokemon.create([
      {
          pokeName:'bulbasaur',
          imageURL:'http://img.pokemondb.net/artwork/bulbasaur',
      },
      {
          pokeName:'ivysaur',
          imageURL:'http://img.pokemondb.net/artwork/ivysaur',
      },
      {
          pokeName:'venusaur',
          imageURL:'http://img.pokemondb.net/artwork/venusaur',
      },
      {
          pokeName:'charmander',
          imageURL:'http://img.pokemondb.net/artwork/charmander',
      },
      {
          pokeName:'charizard',
          imageURL:'http://img.pokemondb.net/artwork/charizard',
      },
      {
          pokeName:'squirtle',
          imageURL:'http://img.pokemondb.net/artwork/squirtle',
      },
      {
          pokeName:'wartortle',
          imageURL:'http://img.pokemondb.net/artwork/wartortle',
      }
  ], (err, data)=>{
      res.redirect('/pokemon');
  })
});


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
    res.redirect('/pokemon')    //send the user back to /pokemon
    })  
  })

//show route
app.get('/pokemon/:id', function(req, res){
    pokemon.findById(req.params.id, (err, foundPokemon)=>{
      res.render('Show', {pokemon:foundPokemon})
    })
})

// app.delete('/pokemon/:id', (req, res)=>{
//   res.send('deleting...');
// });

app.delete('/pokemon/:id', (req, res)=>{
  pokemon.findByIdAndRemove(req.params.id, (err, data)=>{
      res.redirect('/pokemon');//redirect back to fruits index
  });
});

app.get('/pokemon/:id/edit', (req, res)=>{ // getting the form prepopulated to edit the fruit
  pokemon.findById(req.params.id, (err, foundPokemon)=>{ //find the pokemon
    if(!err){
      res.render(
        'Edit',
      {
        poke: foundPokemon //pass in found pokemon
      }
    );
  } else {
    res.send({ msg: err.message })
  }
  });
});

app.put('/pokemon/:id', (req, res)=>{
  
  //  res.send(req.body);

//  pokemon.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
//    res.send(updatedModel);
//  });

pokemon.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
  res.redirect('/pokemon');
});

});



  //connect to mongo database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

app.listen(PORT, () => {
  console.log("listening on port ", PORT)
})