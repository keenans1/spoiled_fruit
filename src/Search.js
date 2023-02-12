import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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

  clearInputs = () => {
    this.setState({ movieTitle: '' })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Search'
          name='movieTitle'
          value={this.state.movieTitle}
          onChange={(event) => this.handleChange(event)}
        />
        {
          this.state.movieTitle ? <NavLink to='/'><button onClick={() => {
            this.props.handleClick(this.state.movieTitle)
            this.clearInputs()
          }}>Search</button></NavLink>


            : <button disabled>Search</button>
        }
      </form>
    )
  }
}

export default Search