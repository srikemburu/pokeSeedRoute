// Import the express library here
const React = require('react')

const buttonStyle = {
  background: 'pink',
  width : '15%',
  display : 'block',
  color : 'red',
  font : '50px',
  margin : '30px',
  padding : '10px 20px',
  border: '4px solid black',
}

class Show extends React.Component {
   render () {
    const { pokemon } = this.props;

    return (
      <div>
        <h1> Gotta Catch 'Em All </h1> 
        <h2>{pokemon.pokeName.charAt(0).toUpperCase() + pokemon.pokeName.slice(1)}</h2>
        <img src={pokemon.imageURL + ".jpg"}  width="200" height="200"></img>
        <br></br>
        <br></br>
        <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
              <input type="submit" value="DELETE"/>
        </form>
        <a href={`/pokemon/${pokemon._id}/edit`}>Edit This Pokemon</a>
        <br/><br/>

        {/* <nav>
            <a href="/pokemon">
                <button style={buttonStyle}>Back</button>
                <br></br>
                <br></br>
            </a>    
        </nav> */}
      </div>
      );
    }
 }

 module.exports  = Show