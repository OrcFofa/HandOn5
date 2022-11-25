import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import { ButtonQuantity } from "./ButtonQuantity";
import "./CardProduct.css"

export const CardProduct = ({id, img, title, price, total, quantity, cartItem, product}) => {

    const dispatch = useDispatch();

    let BRreal = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
  });

    return (
        <div className="product">
                <>
                <div className="imgAndTitle" key={id}>
                  <img src={img} alt="imagem produto" className="imgProduct"/>
                    <span>{title}</span>
                 </div>
                  <span>a calcular</span>
                  <span>{BRreal.format(parseFloat(price))}</span>
                  <div className="btnQuantity">
                  <ButtonQuantity quantity={quantity} product={product}/>
                  </div>
                  <span className="total">{BRreal.format(parseFloat(price) * parseFloat(quantity))}</span>
                  <div className="contentBtn">
                  <button className="btnRemove" onClick={() => dispatch(removeFromCart(cartItem))}>X</button>
                  </div>
                </>
         </div>
    )
}
