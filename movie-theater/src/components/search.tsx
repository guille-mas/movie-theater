import {useState, useEffect} from 'react';
import './search.scss'
import Rating from './rating';

function Search(props: {query: string, rating: number, onChange: CallableFunction}) {
    const [query, setQuery] = useState(props.query);
    const [rating, setRating] = useState(props.rating);

    const handleChange = (e: any) => {
        e.preventDefault();
        const newVal = !!e.target.value ? e.target.value : '';
        if(newVal !== query) {
            setQuery(newVal);
        }
        props.onChange({
            query: newVal,
            rating: rating
        });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
        props.onChange({
            query: query,
            rating: newRating
        });
    };

    useEffect(()=> {
        props.onChange({
            query: props.query,
            rating: props.rating
        });
    },[props]);

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
                <Rating value={props.rating} onChange={handleRatingChange} />
            </fieldset>
            </form>
        </div>
    );
}

export default Search;
