import './rating.scss'
import { Star } from './Icons';

function Rating(props: {value: number, onChange?: CallableFunction}) {
    const rating = Math.floor(props.value/2);
    const starsStatus: boolean[] = Array.apply(false, new Array(5))
        .map((val,idx) => 4-idx < rating );
    
    const handleClick = (idx: any) => {
        if(!!props.onChange && !isNaN(idx)){
            const newRating = (5-idx)*2;
            const ratingValue = newRating === props.value ? 0 : newRating;
            props.onChange(ratingValue);
            return ratingValue;
        }
    }

    return (
        <div id="rating">
            {starsStatus.map( (isOn,idx) => <Star on={isOn} key={idx} idx={idx} onClick={handleClick}/>)}
        </div>
    );
}

export default Rating;
