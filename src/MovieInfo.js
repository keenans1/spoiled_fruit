import React from 'react'
import './MovieInfo.css'

const MovieInfo = (props) => {
  console.log('movie info props', props)
  const {title, poster_path, runtime, overview, tagline, revenue, release_date, average_rating, budget} = props.selectedMovie
  return (
    <div>
      <button onClick={() => props.returnHome()} >Home</button>
      <h3>{title}</h3>
      <h4>{tagline}</h4>
      <h4>Runtime:{runtime}</h4>
      <h4>Rating:{average_rating}</h4>
      <img src={poster_path} alt={title}/>
      <h4>Overview:{overview}</h4>
      <h4>Release Date:{release_date}</h4>
      <h4>Budget:{budget}</h4>
      <h4>Revenue:{revenue}</h4>
    </div>
  )
}


export default MovieInfo