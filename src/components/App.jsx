import React from "react";
//import moviesData from"../moviesData"
import {moviesData} from"../moviesData"

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
        return (
          <div>
            <p>{it.title}</p>
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
      })}
    </div>;
  }
}

// function App() {
// return <div>{moviesData[0].title}</div>;
// }

export default App;
