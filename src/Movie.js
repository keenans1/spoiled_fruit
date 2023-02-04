import React from 'react'
import './Movie.css'

const Movie = (props) => {
    console.log('props', props)
    return (
        <div>
            <h2>{props.movie.title}</h2>
            <img src={props.movie.poster_path} alt='movie poster' />
        </div>
    )
}

export default Movie