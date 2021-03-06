import React, { Component } from "react";
import Movie from "./Movie";

// key: fa1e27d0c9a59b67a4a9e0fa8b792d31

class App extends Component {
  state = {
    movies: [],
    loading_error: "Movie data not loaded!"
  };

  //async await fetching movie api
  async componentDidMount() {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=fa1e27d0c9a59b67a4a9e0fa8b792d31"
      );
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results
      });
    } catch (err) {
      console.log(err, "Movie data not loaded");
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1 className="App">Movie Database</h1>
        </header>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default App;
