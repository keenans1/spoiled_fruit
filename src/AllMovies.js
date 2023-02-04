import React from 'react'
import './AllMovies.css'

const AllMovies = (props) => {
  const movies = props.movies.map(movie => {
    console.log('movie:', movie)
    return (
        <h2 className="font" key={movie.id} onClick={props.onClick(movie.id)}>{movie.title}</h2>
    )
  })
  return (
        <div className='movies-container'>
          {movies}
        </div>
      )
}

export default AllMovies


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