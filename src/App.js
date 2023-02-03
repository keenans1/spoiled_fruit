import React, { Component } from 'react'
import './App.css';
import AllMovies from './AllMovies'
import movieData from './movieData'

class App extends Component {

  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.setState({ movies: movieData })
  }

  handleClick = (id) => {
    console.log('hi', id)
  }

  render() {

    return (
      <main>
        <AllMovies movies={this.state.movies} onClick={this.handleClick}/>
      </main>
    )
  }
}



export default App;

// import the movies 
// set the state
// pass as prop to AllMovies