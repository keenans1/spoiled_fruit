import React from 'react'
import './AllMovies.css'
import Movie from './Movie.js'

const AllMovies = (props) => {
  const movies = props.movies.map(movie => {
    return (
      <Movie
        key={movie.id}
        onClick={props.onClick}
        movie={movie}
        movieClicked={props.movieClicked}
      />
    )
  })


  return (
    <div className='movies-container'>
      {movies}
    </div>
  )
}

export default AllMovies
