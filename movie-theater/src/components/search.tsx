import {useState} from 'react';
import './search.scss'
import Rating from './rating';

function Search(props: {query: string, rating: number, onChange: CallableFunction}) {
    const [query, setQuery] = useState(props.query);

    const handleChange = (e: any) => {
        e.preventDefault();
        const newVal = !!e.target.value ? e.target.value : '';
        if(newVal !== query) {
            setQuery(newVal);
            props.onChange(e.target.value || '');
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

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
                <Rating value={props.rating} />
            </fieldset>
            </form>
        </div>
    );
}

export default Search;
