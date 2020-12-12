import './movie.scss';
import {IMovie} from '../interfaces/movie.interface';
import Rating from './rating';

function Movie(props: {movie: IMovie, showDetails: boolean, onClick: CallableFunction}) {
    const computedClasses: string[] = props.showDetails ? ['current'] : [];
    const handleClick = () => props.onClick(props.movie.id);

    return (
        props.movie.poster_path ?
        <li 
            className={`movie ${computedClasses.join(' ')}`}
            style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/${props.movie.poster_path})`}}
            onClick={handleClick}
        >
            <div className="details">
                <h1>{props.movie.title}</h1>
                <h2>{props.movie.release_date}</h2>
                <Rating value={props.movie.vote_average} />
                <p>{props.movie.overview}</p>
            </div>
        </li>
        : 
        null
    );
}

export default Movie;
