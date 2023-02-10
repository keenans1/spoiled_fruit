import React from 'react'
import './Movie.css'
import { NavLink } from 'react-router-dom'

const Movie = (props) => {
    return (
      <NavLink to={`/movies/${props.movie.id}`} key={props.movie.id}>
        <div>
          <div className='title-container'>
            <h2 className="font">{props.movie.title}</h2>
          </div>
            <img src={props.movie.poster_path} alt='movie poster' />
        </div>
      </NavLink>
    )
}

export default Movie
