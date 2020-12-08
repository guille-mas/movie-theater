import './styles/search.scss'
import { Star } from './Icons';

function Search() {
    return (
        <div id="search-component">
            <form>
            <fieldset>
                <input type="search" name="filter-text" placeholder="Search..."/>
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
