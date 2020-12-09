import {useState} from 'react';
import './styles/search.scss'
import { Star } from './Icons';

function Search(props: {query: string}) {
    const [query, setQuery] = useState(props.query);
    return (
        <div id="search-component">
            <form>
            <fieldset>
                <input value={query} onChange={e => setQuery(e.target.value)}  type="search" name="filter-text" placeholder="Search..." />
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
