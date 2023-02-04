import React, { Component } from 'react'
import './App.css';
import AllMovies from './AllMovies'
import MovieInfo from './MovieInfo'

class App extends Component {

  constructor() {
    super()
    this.state = {
      movies: [],
      movieClicked: false,
      selectedMovie: null
    }
  }

  componentDidMount() {


    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => {
        console.log('this is the movie data', data.movies)
        this.setState({ movies: data.movies })
      })


  }

  onClick = (id) => {
    this.setState({ movieClicked: true })

    //another state property- selected movie
    // fetch for individual movie based on id 
    // display (unhide?) movie info component
    //render/return movieInfo comp that matches id of movie clicked
  }

  render() {

    return (
      <main>
        <AllMovies movies={this.state.movies} onClick={this.onClick} movieClicked={this.state.movieClicked} />
        {this.state.movieClicked && <MovieInfo />}
      </main>
    )
  }
}

export default App;

//https://rancid-tomatillos.herokuapp.com/api/v2