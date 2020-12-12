import {IMovie} from '../interfaces/movie.interface';

/**
 * This component abstracts interaction with the backend
 * and implements a naive cache implementation with no TTL
 */
export const useApi = () => {
    const cacheKey = 'cache';

    const cacheResponse = (key: string, movies: IMovie[]) => {
        localStorage.setItem(cacheKey+key, JSON.stringify(movies));
        return movies;
    }

    const fetchList = (query: string) => {
        const cachedResult = localStorage.getItem(cacheKey+query);
        if( cachedResult ) {
            return new Promise<IMovie[]>((resolve, reject) => {
                resolve(JSON.parse(cachedResult));
            })
        } else {
            return fetch(`https://api.themoviedb.org/3/search/movie?api_key=47f2842a8a3f8df7deacda419a093d86&language=en-US&query=${query}&page=1&include_adult=false`)
                .then((res: Response) => res.json())
                .then((r) => cacheResponse(query , r.results || new Array<IMovie>()));
        }
    }
    
    const fetchDiscoveryList = () => {
        const cachedResult = localStorage.getItem(cacheKey);
        if( cachedResult ) {
            return new Promise<IMovie[]>((resolve, reject) => {
                resolve(JSON.parse(cachedResult));
            })
        } else {
            return fetch("https://api.themoviedb.org/3/discover/movie?api_key=47f2842a8a3f8df7deacda419a093d86&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
            .then((res: Response) => res.json())
            .then((r) => cacheResponse('', r.results || new Array<IMovie>()));
        }
    }

    return (query: string): Promise<IMovie[]> => query.length ? fetchList(query) : fetchDiscoveryList();
}
