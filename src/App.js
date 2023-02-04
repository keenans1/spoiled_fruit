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
      selectedMovie: null,
      errorMessage: '',
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.movies, isLoading: false })
      })
      .catch(err => {
        // set error message to err.message
        this.setState({ errorMessage: err.message })
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

        {
          this.state.isLoading && !this.state.errorMessage ? <h2>Loading icon here</h2> : null
        }

        {
          !this.state.isLoading && this.state.errorMessage ? <h2>{this.state.errorMessage}</h2> : null
        }

        {
          !this.state.isLoading && !this.state.errorMessage ?
            <AllMovies movies={this.state.movies} onClick={this.onClick} movieClicked={this.state.movieClicked} /> : null
        }


        {this.state.movieClicked && <MovieInfo />}
      </main>
    )
  }
}

export default App;