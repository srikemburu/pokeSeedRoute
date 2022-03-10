// Import the express library here
const React = require('react')

// const DefaultLayout = require('./layout/Default.jsx')

const buttonStyle = {
  background: 'pink',
  width : '10%',
  display : 'block',
  color : 'red',
  font : '50px',
  margin : '10px',
  padding : '10px 20px',
  border: '4px solid black',
}

class Show extends React.Component {
   render () {
    const { pokemon } = this.props;
    return (   
      <div>
        <link rel="stylesheet" href="/css/app.css"/> 
        {/* <link rel="stylesheet" href="/css/app.html"/>  */}
        <h1> Show Page </h1> 
        <h2>{pokemon.pokeName.charAt(0).toUpperCase() + pokemon.pokeName.slice(1)}</h2>
        <img src={pokemon.imageURL + ".jpg"}  width="200" height="200"></img>
        <br></br>
        <br></br>
        <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
              <input type="submit" value="Delete Pokemon"/>
        </form>
        <br/>

        <nav>
            <a href={`/pokemon/${pokemon._id}/edit`}>  
                  <button>Edit This Pokemon</button>
            </a>
        </nav>

        <nav>
            <a href="/pokemon">
                <button style={buttonStyle}>Back</button>
            </a>    
        </nav>
      </div>
      );
    }
 }

 module.exports  = Show