import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types'
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieTitle: ''
    }
  }

  handleChange = (event) => {
    this.setState({ movieTitle: event.target.value })
  }

  render() {

    let searchButton;

    if (this.state.movieTitle) {
      searchButton = <NavLink to='/'><button className='search-button' onClick={() => {
        this.props.handleClick(this.state.movieTitle)
        this.setState({ movieTitle: '' })
      }}>Search</button></NavLink>
    } else {
      searchButton = <button className='search-button-disabled' disabled>Search</button>
    }

    return (
      <form>
        <input
          type='text'
          placeholder='Search'
          name='movieTitle'
          value={this.state.movieTitle}
          onChange={(event) => this.handleChange(event)}
        />
        {searchButton}
      </form>
    )
  }
}

export default Search

Search.propTypes = {
  handleClick: PropTypes.func.isRequired
}