import React, { useState, useEffect } from 'react';
import './App.scss';
import MovieList from './movie-list';
import Search from './search';
import {IMovie} from './movie.interface';

function App() {
  const [, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(new Array<IMovie>());
  const [filter, ] = useState({
    query: '',
    rating: null,
  })

  const fetchDiscoveryList = () => {
    setIsLoaded(false);
    return fetch("https://api.themoviedb.org/3/discover/movie?api_key=47f2842a8a3f8df7deacda419a093d86&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
    .then((res: Response) => res.json())
      .then(
        (rsp: {results: IMovie[]}) => {
          setItems(rsp.results); 
          setIsLoaded(true);
        },
        (error) => setError(error)
      )
  }

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(()=>{
    fetchDiscoveryList();
  }, [])


  
  return isLoaded ? (
      <div className="App">
        <Search query={filter.query}/>
        <MovieList movies={items}/>
      </div>
  ) : <div className="App"><h1>Loading...</h1></div>
}

export default App;
