import {ButtonComeBack} from "../components/Cart/ButtonComeBack";
import {CardProduct} from "../components/Cart/CardProduct";
import {FooterCart} from "../components/Cart/FooterCart";
import {HeaderCart} from "../components/Cart/HeaderCart";
import {Informations} from "../components/Cart/Informations";
import "../styles/cart.css"

export const Cart = () => {

    return (
        <>
            <div className="buttonComeBack">
                <ButtonComeBack/>
            </div>
            <div className="title">
                <h1>MEU CARRINHO</h1>
            </div>
            <div className="cart">
                <div className="container">
                    <HeaderCart/>
                    <div className="cardProduct">
                        <CardProduct/>
                    </div>
                    <div className="cartInformations">
                        <Informations/>
                    </div>
                    <div className="cartFooter">
                        <FooterCart/>
                    </div>
                </div>
            </div>
        </>

    )
}
