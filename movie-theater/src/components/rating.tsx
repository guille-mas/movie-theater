import './rating.scss'
import { Star } from './Icons';

function Rating(props: {value: number, onChange?: CallableFunction}) {
    const starsStatus: boolean[] = Array.apply(false, new Array(5)).map((val,idx) => 4-idx <= (props.value/2)-1 );
    console.log('starsStatus', starsStatus);

    return (
        <div id="rating">
            {starsStatus.map( (isOn,idx) => <Star on={isOn} key={idx} />)}
        </div>
    );
}

export default Rating;
