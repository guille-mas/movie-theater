import './styles/movie-list.scss';
import {useState} from 'react';
import {IMovie} from './movie.interface';
import Movie from './movie';

function MovieList(props: {movies: IMovie[]}) {
    const [currentMovie, setCurrentMovie] = useState(null);

    return (
        <div id="movie-list-component">
            <ol>
                { props.movies ? props.movies.map((movie: IMovie, idx) => <Movie key={idx.toString()} movie={movie} showDetails={currentMovie === movie.id} onClick={setCurrentMovie} />) : '' }
            </ol>
        </div>
    );
}

export default MovieList;