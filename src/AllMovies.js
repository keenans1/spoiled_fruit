import React from 'react'
import './AllMovies.css'
import Movie from './Movie.js'
import PropTypes from 'prop-types'

const AllMovies = (props) => {
  const sorted = props.movies.sort((a, b) => {
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title) {
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

AllMovies.propTypes = {


  movies: PropTypes.arrayOf(

    PropTypes.shape(

      {
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        backdrop_path: PropTypes.string,
        title: PropTypes.string.isRequired,
        average_rating: PropTypes.number,
        release_date: PropTypes.string
      }
    )


  )



  // Pokemon.propTypes = {
  //   pokemon: PropTypes.shape({
  //     name: PropTypes.string,
  //     id: PropTypes.number,
  //     base_stamina: PropTypes.number,
  //     base_defense: PropTypes.number
  //   })
  // }


  // id: PropTypes.number.isRequired,
  // poster_path: PropTypes.string,
  // backdrop_path: PropTypes.string,
  // title: PropTypes.string.isRequired,
  // average_rating: PropTypes.number,
  // release_date: PropTypes.string

}
