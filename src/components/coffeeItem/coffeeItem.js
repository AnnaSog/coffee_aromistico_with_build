import coffee from './coffee_box.png';
import { Link } from 'react-router-dom';

const CoffeeItem = ({id, name, coutry, price, onCoffeeSelected}) => {
    return(
        <Link to='/info' 
            className="coffee_block" 
            onClick={() => onCoffeeSelected(id)}   //при клике на карточку передается id в Coffee.js -> app.js -> appAbbout.js
            > 
            <img src={coffee} alt="coffee_box" className="coffee_box" />
            <div className="title_fz14">{name}</div>
            <div className="coutry">{coutry}</div>
            <div className="price">{price}</div>
        </Link>
    )
}

export default  CoffeeItem;