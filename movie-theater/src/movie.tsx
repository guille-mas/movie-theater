import './styles/movie.scss';
import {IMovie} from './movie.interface';

function Movie(props: {movie: IMovie, showDetails: boolean, onClick: CallableFunction}) {
    const computedClasses: string[] = props.showDetails ? ['current'] : [];
    const handleClick = () => props.onClick(props.movie.id);

    return (
        <li 
            className={`movie ${computedClasses.join(' ')}`}
            style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/${props.movie.poster_path})`}}
            onClick={handleClick}
        >
            <div className="details">
                <h1>{props.movie.title}</h1>
                <h2>{props.movie.release_date}</h2>
                <p>{props.movie.overview}</p>
            </div>
        </li>
    );
}

export default Movie;