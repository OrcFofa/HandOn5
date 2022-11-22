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
                  <img src="https://s3-alpha-sig.figma.com/img/6f31/ad4b/f3e19fd5fd6b2f8514428afc5fb4847d?Expires=1669593600&Signature=HlIfczu-UY2vh1NIoq1XbWziwvE7G-EP80duKItfhYNoYG-FYZRRKSkf3AxzzDnJIBVZn8LzDyYmLu8WYzhdJHjmMh~aKQm2EHGCi3UgLAvs0nZ66k9LoauSK4dJeDipZVbu1xAp7vN9aJxHJnznV1aYud-JIUtTbN2fMrNWk8GbuNqND2RqdIxFEJmSMeuOOldIB0vdw2MmoF0-zWEOCtopTXQ5UqCF1k6fAbW9TztJsICqWeu-pX55G-Zv5kFZaWaBmkng4M4a-71BO55IyaYv9ezOnfFE7JsfpYxXczZFYxHguZLJnJGh1DyeJScUjLcZOevbOd6qzsMtA5K9Hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="imagem produto" className="imgProduct"/>
                  <span>{title}</span>
                  </div>
                  <span>a calcular</span>
                  <span>R${price}</span>
                  <span><ButtonQuantity quantity={quantity} product={product}/></span>
                  <span className="total">{BRreal.format(parseInt(price) * parseInt(quantity))}</span>
                  <div className="contentBtn">
                  <button className="btnRemove" onClick={() => dispatch(removeFromCart(cartItem))}>X</button>
                  </div>
                </>
         </div>
    )
}
