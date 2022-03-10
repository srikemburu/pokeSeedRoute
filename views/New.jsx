const React = require('react');

class New extends React.Component {
  render() {
    return (
    <div>
      <link rel="stylesheet" href="/css/app.css"/> 
      <link rel="stylesheet" href="/css/app.html"/> 
    <h1>New Pokemon page</h1>
    {/* NOTE: action will be the route, method will be the HTTP verb */}
    <form action="/pokemon" method="POST">
      Name: <input type="text" name="pokeName" /><br/><br/>
      Img URL: <input type="text" name="imageURL" /><br/>  <br/>
      <input type="submit" name="" value="Create Pokemon"/>
    </form>
    </div>);
  }
}

module.exports = New;