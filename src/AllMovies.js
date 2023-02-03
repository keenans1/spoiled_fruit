import React from 'react'

const AllMovies = (props) => {
  const movies = props.movies.map(movie => movie.title)
  return (
   <div>
    <h2>{movies}</h2>
   </div>
  )

}

export default AllMovies