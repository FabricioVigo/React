import './Item.css'
import CartWidget from '../../CartWidget/CartWidget';

function Item(props) {
    const { home, products, aboutMe } = props;

    return(
        <div className="item">
            <ul className="item__data">
                <li><a href='#'>{ home }</a></li>
                <li><a href='#'>{ products }</a></li>
                <li><a href='#'>{ aboutMe }</a></li>
            </ul>
            <div className="item__cart">
            <CartWidget />
            </div>
        </div>
    );
}

export default Item;