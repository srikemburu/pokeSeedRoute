const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component{
    render() {
      return (
        <DefaultLayout title="Edit Page"> 
          <link rel="stylesheet" href="/css/app.css"/>      
          {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          <div>
            <form action={`/pokemon/${this.props.poke._id}?_method=PUT`} method="POST">
              Name   : <input type="text" name="pokeName" defaultValue={this.props.poke.pokeName}/><br/><br/>
              Img URL: <input type="text" name="imageURL"  defaultValue={this.props.poke.imageURL}/><br/><br/>   
              <input type="submit" value="Submit Changes"/>
            </form>
          </div>
        </DefaultLayout>
      )
    }
  }
  module.exports= Edit;