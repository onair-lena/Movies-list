import React from "react";
//import moviesData from"../moviesData"
import {moviesData} from"../moviesData"
import MovieItem from "./MovieItem"

//console.log(moviesData)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: moviesData
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
             />
             </div>
            )
          })}
         </div>
        </div>
        <div className="col-3">
          <p>Will watch: 0</p>
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
