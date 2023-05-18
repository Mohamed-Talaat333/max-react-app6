import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  function fetchMoviesHandler() {
    fetch("https://swapi.dev/api/films/").then((res) => console.log(res)).catch(() => console.log("error"));
  }
  
  fetchMoviesHandler();

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        {/* <MoviesList movies={dummyMovies} /> */}
      </section>
    </React.Fragment>
  );
}

export default App;
