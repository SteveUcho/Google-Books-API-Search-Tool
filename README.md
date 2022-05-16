## Tech Challenge

This is a simple technical challenge to show us your ability using Vue JS

- [VueJS][4]

Functionality is the main priority but please try to use some level of inspirational design.

You can choose between one of the below open API's:

- Google Books API - a list of books [Books API][8].
- Super Hero API - a list of superheroes [SuperHero API][6], you can use the following access token `10158001497136277`, if this token no longer works you can create a new one with a facebook account [here][7].
  Please use the following URL https://superheroapi.com/api.php/10158001497136277

-------

### Base requirements
* Use the [Airbnb JavaScript Style Guide][1] to keep code consistent and readable. The codebase within this project has linting errors, and these will need to be resolved so that you can continue development
* Use a router within the code, create a `SuperheroView` component and apply it to the route `/superhero`
  - [Vue Router][3]
* Using [axios][4] (or another library if you'd prefer) create a search input which will either a list of books or the super heros from the open API's provided above.
* Use a responsive design approach to make the layout work on a range of screen sizes
* Try to create a good user experience
* Think about folder structure, and keeping code organised
* Consider cross-browser support (Chrome, Firefox, Safari, Microsoft Edge)

-------

### Novice
All of the above requirements, plus:
* Use a pre-processor (SASS, LESS, Stylus, etc.)
* Create some CSS animations
* Create a "Show more" button on the superhero/book, when clicked we would like to show more information about the superhero/book

-------

### Intermediate
All of the above requirements, plus:

* Allow the user to save heroes in state managent and then list them out on a different page
  - [Pinia][5]
* Add option to sort the saved results by full-name / strength / gender / alignment

-------

### Advanced
All of the above requirements, plus:
* Allow a user to compare two or more superheros/books against each other from the list
* Anything else that demonstrates your skills and competency as a developer. Here's a few possible ideas to get you started:
+ Create a more advanced search with extra features
+ Create custom routes to load specific heroes/books
+ Introduce Unit testing
+ Use the TDD process
+ Use typescript

-------

[1]: https://github.com/airbnb/javascript
[2]: https://router.vuejs.org
[3]: https://github.com/axios/axios
[4]: https://vuejs.org
[5]: https://pinia.vuejs.org/
[6]: https://superheroapi.com/index.html#api-references
[7]: https://superheroapi.com/index.html#intro
[8]: https://developers.google.com/books/docs/v1/using#PerformingSearch
[9]: https://reactjs.org/
[10]: https://angular.io/
[11]: https://create-react-app.dev/docs/adding-a-router
[12]: https://angular.io/guide/router
[13]: https://redux.js.org/
[14]: https://www.ngxs.io/