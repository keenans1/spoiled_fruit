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
      .catch(err => this.setState({ errorMessage: err.message }))
  }

  onClick = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => this.setState({ movieClicked: true, selectedMovie: data.movie}))
    
    // fetch for individual movie based on id 
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


        {this.state.movieClicked && <MovieInfo selectedMovie={this.state.selectedMovie}/>}
      </main>
    )
  }
}

export default App;