import React from 'react'
import './Movie.css'

const Movie = (props) => {
    const display = props.movieClicked ? 'hidden' : 'movie-container'
    return (
      <div className={display} onClick={() => props.onClick(props.movie.id)}>
        <div className='title-container'>
          <h2 className="font title">{props.movie.title}</h2>
        </div>
          <img src={props.movie.poster_path} alt='movie poster' />
      </div>
    )
}

export default Movie
