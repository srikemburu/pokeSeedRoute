const React = require('react');

const myStyle = {
    color: 'brown',
    backgroundColor: 'grey',     
  };

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

    class Index extends React.Component {
      render() {
          const { pokemon } = this.props;
          return (              
                    <div style={myStyle}>
                      <h1>Pokemon Index</h1>
                       <ul>
                          {pokemon.map((poke, i) => {
                              return (
                                  <li> 
                                      <a href={`/pokemon/${poke.id}`}> 
                                           <h2>{poke.pokeName.charAt(0).toUpperCase() + poke.pokeName.slice(1)}</h2>
                                      </a>
                                  </li>
                              );
                          })}
                      </ul> 

                      <nav>
                        <a href="/pokemon/new">   
                            <button style={buttonStyle}>Create a New Pokemon</button>
                            <br></br>
                            <br></br>
                        </a>
                      </nav>
                  </div>
          );
      }
    }

    module.exports = Index;