import {useState} from 'react';
import './search.scss'
import Rating from './rating';

function Search(props: {query: string, rating: number, onChange: CallableFunction}) {
    const [query, setQuery] = useState(props.query);
    const [rating, setRating] = useState(props.rating);

    const handleChange = (e: any) => {
        e.preventDefault();
        const newQuery = !!e.target.value ? e.target.value : '';
        if(newQuery !== query) {
            setQuery(newQuery);
            props.onChange({
                query: newQuery,
                rating: rating
            });
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    const handleRatingChange = (newRating: number) => {
        if(newRating !== rating) {
            setRating(newRating);
            props.onChange({
                query: query,
                rating: newRating
            });
        }
    };

    return (
        <div id="search-component">
            <form onSubmit={handleSubmit}>
            <fieldset>
                <input  value={query} 
                        onChange={handleChange}  
                        type="search" 
                        name="filter-text" 
                        placeholder="Search..."
                        autoFocus={true}
                />
                <Rating value={rating} onChange={handleRatingChange} />
            </fieldset>
            </form>
        </div>
    );
}

export default Search;
