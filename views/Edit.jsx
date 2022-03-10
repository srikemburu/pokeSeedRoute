const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./layout/Default.jsx')

const label = {
  
    display: 'flex',
    flexDirection: 'row',
    justifycontent : 'flexend',
    textalign : 'right',
    width : '400px',
    lineheight : '26px',
    marginbottom : '10px',
  };

class Edit extends React.Component{
    render() {
      return (
        <DefaultLayout title="Edit Page"> 
        <link rel="stylesheet" href="/css/app.css"/> 
        <link rel="stylesheet" href="/css/app.html"/>       

         {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
        
        <form action={`/pokemon/${this.props.poke._id}?_method=PUT`} method="POST">
          <label>
            Name   : <input type="text" name="pokeName" defaultValue={this.props.poke.pokeName}/><br/><br/>
          </label>
          <label>
            Img URL: <input type="text" name="imageURL"  defaultValue={this.props.poke.imageURL}/><br/><br/>
          </label>
          <label>    
            <input type="submit" value="Submit Changes"/>
          </label>
        </form>
        </DefaultLayout>
      )
    }
  }
  module.exports= Edit;