import React, { useState, useEffect } from 'react';
import './App.scss';
import MovieList from './components/movie-list';
import Search from './components/search';
import {IMovie} from './interfaces/movie.interface';
import {usePreferences} from './hooks/user-preferences';

function App() {
  const [, setError] = useState(null);
  const [items, setItems] = useState(new Array<IMovie>());
  const [userPref, setUserPref] = usePreferences();

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
    setUserPref({...userPref, ...{query: query}});
  }

  useEffect(()=>{
    if(userPref.query.length) {
      fetchList(userPref.query);
    } else {
      fetchDiscoveryList();
    }
  }, [userPref.query])

  return (
    <div className="App">
        <Search query={userPref.query} rating={userPref.rating || 0} onChange={updateSearch}/>
        <MovieList movies={items}/>
      </div>
  )
}

export default App;