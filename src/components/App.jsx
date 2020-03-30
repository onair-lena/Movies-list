import React from "react";
//import moviesData from"../moviesData"
import {moviesData} from"../moviesData"
import MovieItem from "./MovieItem"

console.log(moviesData)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: moviesData
     }
  }
  render () {
    console.log(this)
    return <div>
      {this.state.movies.map(it => {
        return <MovieItem key={it.id} movie={it}/>
      })}
    </div>;
  }
}

// function App() {
// return <div>{moviesData[0].title}</div>;
// }

export default App;
