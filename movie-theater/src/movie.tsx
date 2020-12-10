import './styles/movie.scss';
import {IMovie} from './movie.interface';

function Movie(props: {movie: IMovie}) {
    return (
        <li className="movie">{props.movie.title}</li>
    );
}

export default Movie;