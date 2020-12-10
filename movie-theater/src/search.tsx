import {useState} from 'react';
import './styles/search.scss'
import { Star } from './Icons';

function Search(props: {query: string, onChange: CallableFunction}) {
    const [query, setQuery] = useState(props.query);

    const handleChange = (e: any) => {
        e.preventDefault();
        const newVal = !!e.target.value ? e.target.value : '';

        setQuery(newVal);
        props.onChange(e.target.value || '');
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
                <div id="filter-rating">
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
            </fieldset>
            </form>
        </div>
    );
}

export default Search;
