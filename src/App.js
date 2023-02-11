import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css';
import AllMovies from './AllMovies'
import MovieInfo from './MovieInfo'
import getMovies from './moviesApiCall'
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

  handleClick = () => {
    //event.preventDefault()
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
    this.setState({ movieClicked: false, selectedMovie: null })

    // const noMovies = ReactDOM.createRoot(document.getElementById('oops'))

    // (this.state.movieTitle && this.state.filteredMovies.length === 0 && noMovies.classList.remove('hidden'))
  }

  render() {
    //if search length is 0, display all movies
    return (
      <main className='App'>
        <header className='header'>
          <div className='button-container'>
            <NavLink to='/'><button className='button' onClick={() => this.setState({ filteredMovies: [], movieTitle: '', movieClicked: false, selectedMovie: null })}>Home</button></NavLink>
          </div>
          <h1 className='title'>Spoiled Fruit</h1>
          <form>
            <input
              type='text'
              placeholder='Search'
              name='movieTitle'
              value={this.state.movieTitle}
              onChange={(event) => this.handleChange(event)}
            />
            <NavLink to='/'><button onClick={() => this.handleClick()}>Search</button></NavLink>
          </form>
        </header>
        {this.state.isLoading && !this.state.errorMessage ? <h2>Loading</h2> : null}
        {!this.state.isLoading && this.state.errorMessage ? <h2>{this.state.errorMessage}</h2> : null}
        {/* {this.state.filteredMovies.length > 0 ? <Route exact path='/' render={() => <AllMovies movies={this.state.filteredMovies} />} ></Route> :
          <Route exact path='/' render={() => <AllMovies movies={this.state.movies} />} ></Route>
        }

        {this.state.movieTitle && this.state.filteredMovies.length === 0 ? <h2>oopsy</h2> : null} */}

        {this.state.filteredMovies.length > 0 && <Route exact path='/' render={() => <AllMovies movies={this.state.filteredMovies} />} ></Route>}

        {!this.state.movieTitle && this.state.filteredMovies.length === 0 && <Route exact path='/' render={() => <AllMovies movies={this.state.movies} />} ></Route>}

        {this.state.movieTitle && this.state.filteredMovies.length === 0 && <h2 className='noMoviesError'>oopsy</h2>}





        {/* {
        
        if() {

        } else if() {

        } else {

        }
        
        } */}

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