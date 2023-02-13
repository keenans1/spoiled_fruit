import React, { Component } from 'react'
import './App.css';
import AllMovies from './AllMovies'
import MovieInfo from './MovieInfo'
import { Route, NavLink } from 'react-router-dom'
class App extends Component {

  constructor() {
    super()
    this.state = {
      movies: [],
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

  getMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => this.setState({ selectedMovie: data.movie }))
  }

  returnHome = () => {
    this.setState({ movieClicked: false, selectedMovie: null })
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

        <Route exact path='/' render={() => <AllMovies movies={this.state.movies} />} ></Route>

        <Route path='/movies/:id' render={({ match }) => {
          return (
            <div className='info-container'>
              <MovieInfo movieID={match.params.id} />
            </div>
          )
        }} ></Route>
      </main>
    )
  }
}

export default App;