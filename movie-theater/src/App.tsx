import React from 'react';
import './App.scss';
import MovieList from './movie-list';
import Search from './search';

function App() {
  return (
    <div className="App">
      <Search/>
      <MovieList/>
    </div>
  );
}

export default App;
