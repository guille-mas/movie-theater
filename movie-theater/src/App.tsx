import React, { useState, useEffect } from 'react';
import './App.scss';
import MovieList from './movie-list';
import Search from './search';
import {IMovie} from './movie.interface';

function App() {
  const [, setError] = useState(null);
  const [items, setItems] = useState(new Array<IMovie>());
  const [filter, setFilter] = useState({
    query: '',
    rating: null,
  })

  const fetchDiscoveryList = () => {
    return fetch("https://api.themoviedb.org/3/discover/movie?api_key=47f2842a8a3f8df7deacda419a093d86&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
      .then((res: Response) => res.json())
      .then((r) => setItems(r.results || new Array<IMovie>()),setError);
  }

  const fetchList = (query: string) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=47f2842a8a3f8df7deacda419a093d86&language=en-US&query=${query}&page=1&include_adult=false`)
      .then((res: Response) => res.json())
      .then((r) => setItems(r.results || new Array<IMovie>()),setError);
  }

  const updateSearch = (query: string) => {
    setFilter({...filter, ...{query: query}});
  }

  useEffect(()=>{
    if(filter.query.length) {
      fetchList(filter.query);
    } else {
      fetchDiscoveryList();
    }
  }, [filter.query])

  return (
    <div className="App">
        <Search query={filter.query} onChange={updateSearch}/>
        <MovieList movies={items}/>
      </div>
  )
}

export default App;