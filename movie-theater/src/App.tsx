import React, { useState, useEffect } from 'react';
import './App.scss';
import MovieList from './components/movie-list';
import Search from './components/search';
import {IMovie} from './interfaces/movie.interface';
import {usePreferences} from './hooks/user-preferences';
import {useApi} from './hooks/api';

function App() {
  const [items, setItems] = useState(new Array<IMovie>());
  const [userPref, setUserPref] = usePreferences();
  const API = useApi();

  const byRating = (rating: number|null) => {
    const numericRating = Number(rating);
    return (m: IMovie) => rating === 0 ? true : m.vote_average > numericRating && m.vote_average < numericRating+2;
  };
  
  const updateSearch = (obj: {query: string, rating: number}) => {
    setUserPref({...userPref, ...obj});
    const newQuery = obj.query;
    const newRating = obj.rating;
    if(newQuery.length) {
      API(newQuery).then((list) => setItems(list.filter(byRating(newRating))));
    }else {
      API('').then((list) => setItems(list.filter(byRating(newRating))));
    }
  }

  // initial setup
  useEffect(()=>{
    updateSearch({query: userPref.query, rating: userPref.rating || 0});
    // eslint-disable-next-line
  },[]);

  return (
    <div className="App">
        <Search query={userPref.query} rating={userPref.rating || 0} onChange={updateSearch}/>
        <MovieList movies={items}/>
      </div>
  )
}

export default App;