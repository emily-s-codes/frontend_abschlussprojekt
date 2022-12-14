import { Link } from "react-router-dom";
import * as MdIcons from "react-icons/md";

function ShoppingCart() {
    return (
        <div>
            <Link to={"/home"}><MdIcons.MdOutlineKeyboardArrowLeft /></Link>
            <div>
                This is the shopping Cart.
            </div>
        </div>
    )
}

export default ShoppingCart;