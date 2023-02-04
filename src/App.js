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
    return (
    <AllMovies add className="hidden"/>
    )
    // hide all movies except the only we clicked on
    // maybe use find with the id parameter?
    // display (unhide?) movie info component
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