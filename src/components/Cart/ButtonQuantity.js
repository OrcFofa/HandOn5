import { useDispatch } from "react-redux"
import { addToCart, decreaseCart } from "../../store/cartSlice";
import "./ButtonQuantity.css"

export const ButtonQuantity = ({quantity, product}) => {

    const dispatch = useDispatch(); 

    return (
        <div className="cart-product-quantity">
            <button onClick={() => dispatch(decreaseCart(product) )}>
                -
            </button>
            <div className="count">{quantity}</div>
            <button onClick={() => dispatch(addToCart(product)) }>
                +
            </button>
        </div>
    )
}
