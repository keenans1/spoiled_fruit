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

  render() {

    return (
      <main>
        <AllMovies />
      </main>
    )
  }
}



export default App;

// import the movies 
// set the state
// pass as prop to ALlMovies