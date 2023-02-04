import React from 'react'
import './AllMovies.css'
import Movie from './Movie.js'

const AllMovies = (props) => {
  const movies = props.movies.map(movie => {
    console.log('movie:', movie)
    return (
      <Movie
        key={movie.id}
        onClick={props.onClick}
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



//<h2 className="font" key={movie.id} onClick={props.onClick(movie.id)}>{movie.title}</h2>

// const Ideas = ({ideas}) => {

//   const ideaCards = ideas.map(idea => {
//     return (
//       <Card
//         title={idea.title}
//         description={idea.description}
//         id={idea.id}
//         key={idea.id}
//       />
//     )
//   })

//   return (
//     <div className='ideas-container'>
//       {ideaCards}
//     </div>
//   )
// }