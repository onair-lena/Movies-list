import React from "react";
//import moviesData from"../moviesData"
import {moviesData} from"../moviesData"

console.log(moviesData)

function App() {
return <div>{moviesData[0].title}</div>;
}

export default App;
