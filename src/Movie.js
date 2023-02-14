import React from 'react'
import './Movie.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Movie = (props) => {
  const { id, title, poster_path } = props.movie
  return (
    <NavLink to={`/movies/${id}`} key={id}>
      <img src={poster_path} alt='movie poster' />
    </NavLink>
  )
}

export default Movie

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