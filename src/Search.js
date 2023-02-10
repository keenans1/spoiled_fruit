import React from "react";

const Search = () => {
  return (
    <form>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={this.state.title}
      />
      <button>SEARCH</button>
    </form>
  )
}

export default Search