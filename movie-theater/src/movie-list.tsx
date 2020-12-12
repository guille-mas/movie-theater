import './styles/movie-list.scss';
import {IMovie} from './movie.interface';
import Movie from './movie';
import {usePreferences} from './user-preferences';

function MovieList(props: {movies: IMovie[]}) {
    const [userPref, setUserPref] = usePreferences();
    const listLen = props.movies.length;

    const updateCurrentMovie = (id: number) => setUserPref({...userPref, ...{currentMovie: id}});

    return (
        <div id="movie-list-component">
            <ol>
                {props.movies ? 
                    props.movies.map((movie: IMovie, idx) => <Movie 
                        key={idx.toString()} 
                        movie={movie} 
                        showDetails={listLen === 1 || userPref.currentMovie === movie.id} 
                        onClick={updateCurrentMovie} />
                    ) 
                    : '' 
                }
            </ol>
        </div>
    );
}

export default MovieList;