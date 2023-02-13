import React, { Component } from 'react'
import './MovieInfo.css'
import getSingleMovie from './singleMovieApiCall'
import PropTypes from 'prop-types'

class MovieInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMovie: {}
    }
  }


  componentDidMount() {
    getSingleMovie(this.props.movieID)
      .then(data => this.setState({ selectedMovie: data.movie }))
      .catch(err => console.log({ errorMessage: err.message }))
  }
  // <div className='image-container'>
  //   <img className='font margin' src={poster_path} alt={title} />
  // </div>

  render() {
    const { title, runtime, overview, release_date } = this.state.selectedMovie
    const selected = {
      backgroundImage: `url(${this.state.selectedMovie.backdrop_path})`,
      height: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
    return (
      <div className='single-container' style={selected}>
        <div className='details-container'>
          <h3 className='movie-title'>{title}</h3>
          <h4 className='font'>Runtime: {runtime} minutes</h4>
          <h4 className='font'>Overview: {overview}</h4>
          <h4 className='font'>Release Date: {release_date}</h4>
        </div>
      </div>
    )
  }
}

export default MovieInfo

// delete unused variables
// delete all unused imports

MovieInfo.propTypes = {
  movieID: PropTypes.number.isRequired
}