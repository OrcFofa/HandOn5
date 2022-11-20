import {ButtonComeBack} from "../components/Cart/ButtonComeBack";
import {CardProduct} from "../components/Cart/CardProduct";
import {FooterCart} from "../components/Cart/FooterCart";
import {HeaderCart} from "../components/Cart/HeaderCart";
import {Informations} from "../components/Cart/Informations";
import {useSelector} from "react-redux";
import "../styles/cart.css"

export const Cart = () => {

    const cart = useSelector((state) => state.cart)

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
                    {
                    cart.cartItems.lenght === 0 ? (
                        <div>
                            <p>Seu carrinho está vazio</p>
                        </div>
                    ) : (
                        <div className="cardProduct">
                            {cart.cartItems?.map((cartItem => (
                                 <CardProduct
                                 key={cartItem.id}
                                 img={cartItem.img}
                                 title={cartItem.title}
                                 price={cartItem.price}
                                 quantity={cartItem.cartQuantity}
                                //  total={cartItem.price * cartItem.cartQuantity}
                                 />
                            ))) }
                        </div>
                    )}
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
