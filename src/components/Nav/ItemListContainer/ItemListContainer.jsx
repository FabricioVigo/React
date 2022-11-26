import CartWidget from '../CartWidget/CartWidget';
import Item from './item/Item';
function ItemListContainer() {
const item = {
    home: "Home",
    products: "Products",
    aboutMe: "About me"
}
    return(
        <div className="usersContainer">
            <Item home={item.home}
            products={item.products}
            aboutMe={item.aboutMe}
            />

        </div>
    );
}

export default ItemListContainer;