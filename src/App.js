import React, { Component } from 'react'
import './App.css';
import AllMovies from './AllMovies'
import movieData from './movieData'

class App extends Component {

  constructor() {
    super()
    this.state = {
      movies: [],
      movieClicked: false
    }
  }

  componentDidMount() {
    this.setState({ movies: movieData })
  }

  onClick = (id) => {
    this.setState({movieClicked: true})
    // return (
    // <AllMovies add className="hidden"/>
    // )
    // hide all movies except the only we clicked on
    // maybe use find with the id parameter?
    // display (unhide?) movie info component
  }

  render() {

    return (
      <main>
        <AllMovies movies={this.state.movies} onClick={this.onClick} movieClicked={this.state.movieClicked}/>
      </main>
    )
  }
}

export default App;