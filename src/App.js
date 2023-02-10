import React, { Component } from 'react'
import './App.css';
import AllMovies from './AllMovies'
import MovieInfo from './MovieInfo'
import getMovies from './moviesApiCall'
//import Search from './Search';
import { Route, NavLink } from 'react-router-dom'
class App extends Component {

  constructor() {
    super()
    this.state = {
      movies: [],
      selectedMovie: null,
      errorMessage: '',
      isLoading: true,
      filteredMovies: [],
      movieTitle: ''
    }
  }

  componentDidMount() {
    getMovies()
      .then(data => this.setState({ movies: data.movies, isLoading: false }))
      .catch(err => this.setState({ errorMessage: err.message }))
  }

  returnHome = () => {
    this.setState({ movieClicked: false, selectedMovie: null })
  }

  handleChange = event => {
    this.setState({ movieTitle: event.target.value })
  }

  handleClick = (event) => {
    event.preventDefault()
    if (this.state.movieTitle) {
      const lowerCaseSearch = this.state.movieTitle.toLowerCase()
      const filtered = this.state.movies
        .filter(movie => {
          const lowerCaseTitle = movie.title.toLowerCase()
          if (lowerCaseTitle.includes(lowerCaseSearch)) {
            return movie
          }
        })
      this.setState({ filteredMovies: filtered })
    } else {
      this.setState({ filteredMovies: [] })
    }
  }

  render() {
    //if search length is 0, display all movies
    return (
      <main className='App'>
        <header>
          <h1 className='header'>Spoiled Fruit</h1>
          <form>
            <input
              type='text'
              placeholder='Search'
              name='movieTitle'
              value={this.state.movieTitle}
              onChange={(event) => this.handleChange(event)}
            />
            <button onClick={(event) => this.handleClick(event)}>Search</button>
          </form>
        </header>
        {this.state.isLoading && !this.state.errorMessage ? <h2>Loading</h2> : null}
        {!this.state.isLoading && this.state.errorMessage ? <h2>{this.state.errorMessage}</h2> : null}
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