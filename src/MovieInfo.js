import React from 'react'
import './MovieInfo.css'
const MovieInfo = (props) => {
  console.log('movie info props', props)
  const {title, poster_path, runtime, overview, tagline, revenue, release_date, average_rating, budget} = props.selectedMovie
  return (
    <div className='single-container'>
      <h3 className='font movie-title'>{title}</h3>
      <img className='font margin' src={poster_path} alt={title}/>
      {/* <h4 className='font margin'>{tagline}</h4> */}
      <h4 className='font'>Runtime: {runtime} minutes</h4>
      <h4 className='font margin'>Rating: {average_rating}/10</h4>
      <h4 className='font margin'>Overview: {overview}</h4>
      <h4 className='font margin'>Release Date: {release_date}</h4>
      <h4 className='font'>Revenue: ${revenue}</h4>
      <button className='button' onClick={() => props.returnHome()} >Home</button>
    </div>
  )
}


export default MovieInfo