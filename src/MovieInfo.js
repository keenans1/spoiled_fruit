import React, { Component } from 'react'
import './MovieInfo.css'
import { NavLink } from 'react-router-dom';

class MovieInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMovie: {}
    }
  }


  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieID}`)
      .then(response => response.json())
      .then(data => this.setState({ selectedMovie: data.movie }))
  }

  render() {
    const { id, title, poster_path, runtime, overview, revenue, release_date, average_rating } = this.state.selectedMovie

    return (
      <div className='single-container'>
        <h3 className='font movie-title'>{title}</h3>
        <img className='font margin' src={poster_path} alt={title} />
        <h4 className='font'>Runtime: {runtime} minutes</h4>
        <h4 className='font margin'>Rating: {average_rating}/10</h4>
        <h4 className='font margin'>Overview: {overview}</h4>
        <h4 className='font margin'>Release Date: {release_date}</h4>
        <h4 className='font'>Revenue: ${revenue}</h4>
        <NavLink to='/' key={id}><button className='button'> Home</button></NavLink>
      </div>
    )
  }
}

export default MovieInfo