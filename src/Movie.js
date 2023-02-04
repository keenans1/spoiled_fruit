import React from 'react'
import './Movie.css'

const Movie = (props) => {
    console.log('props', props)
    return (
        <div className='movie-container' onClick={() => props.onClick(props.movie.id)}>
            <h2 className="font">{props.movie.title}</h2>
            <img src={props.movie.poster_path} alt='movie poster' />
        </div>
    )
}

export default Movie

//onClick={() => deleteIdea(id)}


//{props.onClick={() => }}