import './styles/movie.scss';
import {IMovie} from './movie.interface';

function Movie(props: {movie: IMovie}) {
    return (
        <li 
            className="movie"
            style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/${props.movie.poster_path})`}}
        ></li>
    );
}

export default Movie;