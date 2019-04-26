import React, { Component } from "react";
import Movie from "./Movie";

const movies = [
  {
    id: 1,
    title: "Indiana Jones",
    desc: "An action movie with a guy who wears a hat"
  },
  {
    id: 2,
    title: "Spider Man"
  },
  {
    id: 3,
    title: "James Bond"
  },
  {
    id: 4,
    title: "The Simpsons Movie"
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="App">Movie Database</h1>
        </header>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} desc={movie.desc} />
        ))}
      </div>
    );
  }
}

export default App;
