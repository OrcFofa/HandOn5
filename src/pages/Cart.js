import {useSelector} from "react-redux";
import {ButtonComeBack} from "../components/Cart/ButtonComeBack";
import {CardProduct} from "../components/Cart/CardProduct";
import { CartEmpty } from "../components/Cart/CartEmpty";
import {FooterCart} from "../components/Cart/FooterCart";
import {HeaderCart} from "../components/Cart/HeaderCart";
import {Informations} from "../components/Cart/Informations";
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
                    {
                    cart.cartItems.length === 0 ? (
                        <CartEmpty/>
                    ) : (
                        <>
                            <HeaderCart/>
                            <div className="cardProduct">
                                {
                                cart.cartItems?.map((cartItem => (
                                    <CardProduct 
                                        key={cartItem.id}
                                        img={cartItem.img}
                                        title={cartItem.title}
                                        price={cartItem.price}
                                        quantity={cartItem.cartQuantity}
                                        cartItem={cartItem}
                                        product={cartItem}
                                        //  total={cartItem.price * cartItem.cartQuantity}
                                    />
                                )))
                            } </div>
                            <div className="cartFooter">
                                <FooterCart 
                                subtotal={cart.cartTotalAmount}
                                total={cart.cartTotalAmount}/>
                            </div>
                        </>
                    )
                } </div>
            </div>
        </>

    )
}
