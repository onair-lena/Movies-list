import React from "react"

const MovieItem = (props) => {
  console.log(props.movie)
  return (
    <div>
      <p>{props.movie.title}</p>
      <button onClick={ () => {
        const updateMovies = this.state.movies.filter(item =>{
          return item.id !==it.id
        })
        console.log(updateMovies)
        this.setState({
          movies: updateMovies
        })
      }}
      >
      Delete Movie
      </button> 
    </div>
  )
}

export default MovieItem
