import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {ButtonComeBack} from "../components/ButtonComeBack/ButtonComeBack";
import {CardProduct} from "../components/Cart/CardProduct";
import { CartEmpty } from "../components/Cart/CartEmpty";
import {FooterCart} from "../components/Cart/FooterCart";
import {HeaderCart} from "../components/Cart/HeaderCart";
import { getTotal } from "../store/cartSlice";
import "../styles/cart.css"


export const Cart = () => {


    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal());
    })

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
                                        key={cartItem.productId}
                                        img={cartItem.image}
                                        title={cartItem.title}
                                        price={cartItem.price}
                                        quantity={cartItem.cartQuantity}
                                        cartItem={cartItem}
                                        product={cartItem}
                                    />
                                )))
                            }
                            </div>
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
