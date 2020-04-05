import React from "react";
//import moviesData from"../moviesData"
import {moviesData} from"../moviesData"
import MovieItem from "./MovieItem"

//console.log(moviesData)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: moviesData,
      moviesWillWatch: []
     }
  }
removeMovie = (movie) =>{
  const updateMovies = this.state.movies.filter(item =>{
    return item.id !==movie.id
  })
  this.setState({
    movies: updateMovies
  })
}

removeMovieFromWillWatch = (movie) =>{
  const updateMoviesWillWatch = this.state.moviesWillWatch.filter(item =>{
    return item.id !==movie.id
  })
  this.setState({
    moviesWillWatch: updateMoviesWillWatch
  })
}

addMovieToWillWatch = (movie) => {
  console.log(movie)
  //this.state.moviesWillWatch.push(movie)
  const willWatchMovies = [...this.state.moviesWillWatch, movie]
  // willWatchMovies.push(movie)
  this.setState({
    moviesWillWatch: willWatchMovies
  })
}

  render () {
    //console.log(this)
    return (
    <div className="container">
      <div className="row">
        <div className="col-9">
        <div className="row">
          {this.state.movies.map(it => {
            return (
              <div className="col-6 mb-4" key={it.id}>
              <MovieItem 
              movie={it} 
              removeMovie={this.removeMovie}
              addMovieToWillWatch={this.addMovieToWillWatch}
              removeMovieFromWillWatch={this.removeMovieFromWillWatch}
             />
             </div>
            )
          })}
         </div>
        </div>
        <div className="col-3">
        <p>Will watch: {this.state.moviesWillWatch.length}</p>
        </div>
      </div>
    </div>
    )
  }
}

{/* // function App() {
// return <div>{moviesData[0].title}</div>;
// } */}

export default App;
