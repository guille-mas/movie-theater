import {IMovie} from '../interfaces/movie.interface';

export const useApi = () => {
    const fetchList = (query: string) => {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=47f2842a8a3f8df7deacda419a093d86&language=en-US&query=${query}&page=1&include_adult=false`)
            .then((res: Response) => res.json())
            .then((r) => r.results || new Array<IMovie>());
    }
    
    const fetchDiscoveryList = () => {
        return fetch("https://api.themoviedb.org/3/discover/movie?api_key=47f2842a8a3f8df7deacda419a093d86&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
            .then((res: Response) => res.json())
            .then((r) => r.results || new Array<IMovie>());
    }

    return (query: string): Promise<IMovie[]> => query.length ? fetchList(query) : fetchDiscoveryList();
}
