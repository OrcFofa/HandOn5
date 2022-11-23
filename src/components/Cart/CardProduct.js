import { ButtonQuantity } from "./ButtonQuantity";
import "./CardProduct.css"

export const CardProduct = ({id, img, title, price, total, quantity}) => {

    return (
        <div className="product">
                <>
                <div className="imgAndTitle" key={id}>
                  <img src={img} alt="imagem produto" className="imgProduct"/>
                  <span>{title}</span>
                  </div>
                  <span>a calcular</span>
                  <span>{price}</span>
                  <span><ButtonQuantity quantity={quantity}/></span>
                  <span className="total">R$25,00</span>
                  <div className="contentBtn">
                  <button className="btnRemove">X</button>
                  </div>
                </>
         </div>
    )
}
