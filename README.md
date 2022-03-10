# pokeSeedRoute

## heroku link: https://skpokemon.herokuapp.com/pokemon

### Added a Seed Route to Pokemon that adds the entire original pokemon array

**The User Stories**

### Added 1)Add, 2)Update, 3)Delete fuunctionality to the Pokemon App

When a user goes to the **/pokemon** route they will see an index of pokemon: the names of each pokemon rendered to the page.

When a user clicks on the name of the pokemon, they will be taken to that pokemon's show page, and will see the pokemon's name and image.

When a user goes to **/pokemon/new** a user sees a form that allows them to create a brand new pokemon, and then redirects the user back to /pokemon

When a user goes to the show page there will be **three** buttons one that allows them to delete the pokemon and get taken back to the index page and the second one that takes them to **/pokemon/:id/edit** that shows them a form that allows them to edit the pokemon data. The third button is a Back button that will simply take them to an index page.