import React from 'react'
import './Movie.css'

const Movie = (props) => {
    const display = props.movieClicked ? 'hidden' : 'movie-container'
    return (
        <div className={display} onClick={() => props.onClick(props.movie.id)}>
            <h2 className="font">{props.movie.title}</h2>
            <img src={props.movie.poster_path} alt='movie poster' />
        </div>
    )
}

export default Movie
