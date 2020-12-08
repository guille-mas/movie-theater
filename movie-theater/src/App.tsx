import React from 'react';
import './App.scss';
import { Star } from './icons';

function App() {
  return (
    <div className="App">
      <div id="search-component">
        <form>
          <fieldset>
            <input type="search" name="filter-text" placeholder="Search..."/>
            <div id="filter-rating">
              <Star/>
              <Star/>
              <Star/>
              <Star/>
              <Star/>
            </div>
          </fieldset>
        </form>
      </div>
      <div id="movie-list-component">
        <ol className="">
          <li className="movie">Movie Title</li>
          <li className="movie">Movie Title</li>
          <li className="movie">Movie Title</li>
          <li className="movie">Movie Title</li>
          <li className="movie">Movie Title</li>
          <li className="movie">Movie Title</li>
          <li className="movie">Movie Title</li>
          <li className="movie">Movie Title</li>
          <li className="movie">Movie Title</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
