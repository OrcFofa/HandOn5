import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import { ButtonQuantity } from "./ButtonQuantity";
import "./CardProduct.css"

export const CardProduct = ({id, img, title, price, total, quantity, cartItem, product}) => {

    const dispatch = useDispatch();

    return (
        <div className="product">
                <>
                <div className="imgAndTitle" key={id}>
                  <img src={img} alt="imagem produto" className="imgProduct"/>
                  <span>{title}</span>
                  </div>
                  <span>a calcular</span>
                  <span>R${price}</span>
                  <span><ButtonQuantity quantity={quantity} product={product}/></span>
                  <span className="total">R${parseInt(price) * parseInt(quantity)}</span>
                  <div className="contentBtn">
                  <button className="btnRemove" onClick={() => dispatch(removeFromCart(cartItem))}>X</button>
                  </div>
                </>
         </div>
    )
}
