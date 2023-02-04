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

  onClick = (id) => {
    console.log('click is working', id)
  }

  render() {

    return (
      <main>
        <AllMovies movies={this.state.movies} onClick={this.onClick} />
      </main>
    )
  }
}



export default App;

// import the movies 
// set the state
// pass as prop to AllMovies