import React from 'react'
import './Movie.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Movie = (props) => {
  return (
    <NavLink to={`/movies/${props.movie.id}`} key={props.movie.id}>
      <div>
        <div className='title-container'>
          <h2 className="font">{props.movie.title}</h2>
        </div>
        <img src={props.movie.poster_path} alt='movie poster' />
      </div>
    </NavLink>
  )
}

export default Movie

// destructure props
// delete movieData.js file
// probably delete setUpTests.js file

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    average_rating: PropTypes.number,
    release_date: PropTypes.string
  })
}