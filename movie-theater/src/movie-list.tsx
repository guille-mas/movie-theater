import './styles/movie-list.scss';
import {IMovie} from './movie.interface';

function MovieList(props: {movies: IMovie[]}) {
    return (
        <div id="movie-list-component">
            <ol>
                { props.movies.map((movie: IMovie, idx) => <li key={idx.toString()} className="movie">{movie.title}</li>) }
            </ol>
        </div>
    );
}

export default MovieList;