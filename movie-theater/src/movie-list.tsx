import './styles/movie-list.scss';
import {IMovie} from './movie.interface';
import Movie from './movie';

function MovieList(props: {movies: IMovie[]}) {
    return (
        <div id="movie-list-component">
            <ol>
                { props.movies ? props.movies.map((movie: IMovie, idx) => <Movie key={idx.toString()} movie={movie} />) : '' }
            </ol>
        </div>
    );
}

export default MovieList;