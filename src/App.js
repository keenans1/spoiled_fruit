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
  }

  returnHome = () => {
    this.setState({movieClicked: false, selectedMovie: null})
  }

  render() {

    return (
      <main className='App'>
        <header>
          <h1 className='header'>Spoiled Fruit</h1>
        </header>

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


        {this.state.movieClicked && 
        <div className='info-container'>
          <MovieInfo selectedMovie={this.state.selectedMovie} returnHome={this.returnHome}/>
        </div>}
      </main>
    )
  }
}

export default App;