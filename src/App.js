import React, { Component } from 'react'
import './App.css';
import AllMovies from './AllMovies'
import MovieInfo from './MovieInfo'
import getMovies from './moviesApiCall'
import Search from './Search'
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

  handleClick = (movieTitle) => {
    const lowerCaseSearch = movieTitle.toLowerCase()
    const filtered = this.state.movies
      .filter(movie => {
        const lowerCaseTitle = movie.title.toLowerCase()
        if (lowerCaseTitle.includes(lowerCaseSearch)) {
          return movie
        }
      })
    this.setState({ filteredMovies: filtered, movieClicked: false, selectedMovie: null, movieTitle: movieTitle })
  }

  render() {
    return (
      <main className='App'>
        <header className='header'>
          <div className='button-container'>
            <NavLink to='/'><button className='home-button' onClick={() => this.setState({ filteredMovies: [], movieTitle: '', movieClicked: false, selectedMovie: null })}>Home</button></NavLink>
          </div>
          <h1 className='title'>Spoiled Fruit</h1>
          <Search handleClick={this.handleClick} />
        </header>
        {this.state.isLoading && !this.state.errorMessage ? <h2>Loading</h2> : null}
        {!this.state.isLoading && this.state.errorMessage ? <h2>{this.state.errorMessage}</h2> : null}
        {this.state.filteredMovies.length > 0 && <Route exact path='/' render={() => <AllMovies movies={this.state.filteredMovies} />} ></Route>}
        {!this.state.movieTitle && this.state.filteredMovies.length === 0 && <Route exact path='/' render={() => <AllMovies movies={this.state.movies} />} ></Route>}
        {this.state.movieTitle && this.state.filteredMovies.length === 0 && <h2 className='noMoviesError'>Sorry, no results match your search. Please try another search or click the Home button.</h2>}
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

export default App

// refactor error/no movies available page
// if the url is bad, a blank screen is shown
// what if the api is broke? what page will display.. what is no movies are fetched, what if a single movie isnt fetched
