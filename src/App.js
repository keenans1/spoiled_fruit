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

  handleClick = (searchTitle) => {
    const lowerCaseSearch = searchTitle.toLowerCase()
    const filtered = this.state.movies
      .filter(movie => {
        const lowerCaseTitle = movie.title.toLowerCase()
        if (lowerCaseTitle.includes(lowerCaseSearch)) {
          return movie
        }
      })
    this.setState({ filteredMovies: filtered, movieClicked: false, movieTitle: searchTitle })
  }

  render() {
    let mainDisplay;
    if (this.state.isLoading && !this.state.errorMessage) {
      mainDisplay = <h2>Loading</h2>
    } else if (!this.state.isLoading && this.state.errorMessage) {
      mainDisplay = <h2>{this.state.errorMessage}</h2>
    }
    else if (this.state.filteredMovies.length > 0) {
      mainDisplay = <Route exact path='/' render={() => <AllMovies movies={this.state.filteredMovies} />} ></Route>
    }
    else if (!this.state.movieTitle && this.state.filteredMovies.length === 0) {
      mainDisplay = <Route exact path='/' render={() => <AllMovies movies={this.state.movies} />} ></Route>
    }
    else if (this.state.movieTitle && this.state.filteredMovies.length === 0) {
      mainDisplay = <h2 className='noMoviesError'>Sorry, no results match your search. Please try another search or click the Home button.</h2>
    }

    return (
      <main className='App'>
        <header className='header'>
          <div className='button-container'>
            <NavLink to='/'><button className='home-button' onClick={() => this.setState({ filteredMovies: [], movieTitle: '', movieClicked: false })}>Home</button></NavLink>
          </div>
          <h1 className='title'>Spoiled Fruit</h1>
          <Search handleClick={this.handleClick} />
        </header>
        {mainDisplay}
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