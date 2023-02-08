import React from 'react'
import './AllMovies.css'
import Movie from './Movie.js'

const AllMovies = (props) => {
  const sorted = props.movies.sort((a,b) => {
    if(a.title < b.title) {
      return -1
    }
    if(a.title > b.title) {
      return 1
    }
    return 0
  })
  const movies = sorted.map(movie => {
    return (
      <Movie
        key={movie.id}
        movie={movie}
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
