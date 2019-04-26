import React, { Component } from "react";
import Movie from "./Movie";

//https://api.themoviedb.org/3/movie/550?api_key=fa1e27d0c9a59b67a4a9e0fa8b792d31
// key: fa1e27d0c9a59b67a4a9e0fa8b792d31
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
  state = {
    movies: []
  };

  //async await fetching movie api
  async componentDidMount() {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/550?api_key=fa1e27d0c9a59b67a4a9e0fa8b792d31"
      );
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  }

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
