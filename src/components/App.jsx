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
            return <p>{it.title}</p>
            })}
        </div>;
    }
}

// function App() {
// return <div>{moviesData[0].title}</div>;
// }

export default App;
