import React from "react";
//import moviesData from"../moviesData"
import {moviesData} from"../moviesData"

console.log(moviesData)

class App extends React.Component {
    constructor() {
        super()
    }
    render () {
        console.log(this)
        return <div>{moviesData[0].title}</div>;
    }
}

// function App() {
// return <div>{moviesData[0].title}</div>;
// }

export default App;
