import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"; 

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex( (item) => item.productId === action.payload.productId);
            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            }
            else {
            const tempProduct = { ...action.payload, cartQuantity: 1 };
            state.cartItems.push(tempProduct);
            toast.success(`${action.payload.title} adicionada no carrinho`, {
                position: "bottom-left",
                })
            };
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action){
            const nextCartItems = state.cartItems.filter(
                (cartItem => cartItem.productId !== action.payload.productId)
            );
            state.cartItems = nextCartItems;
            
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

            toast.error(`${action.payload.title} excluída do carrinho`, {
                position: "bottom-left",
                })
        },
        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.productId === action.payload.productId
            )

            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1
            }
            else if (state.cartItems[itemIndex].cartQuantity === 1){
                const nextCartItems = state.cartItems.filter(
                    (cartItem => cartItem.productId !== action.payload.productId)
                );
                state.cartItems = nextCartItems;
                
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    
                toast.error(`${action.payload.title} excluída do carrinho`, {
                    position: "bottom-left",
                    }) 
            }
        },
        getTotal(state, action){
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const {price, cartQuantity} = cartItem
                    const itemTotal = parseInt(price) * parseInt(cartQuantity);

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal
                },
                {
                    total: 0,
                    quantity:0,
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    },

})

export const {addToCart, removeFromCart, decreaseCart, getTotal} = cartSlice.actions;
export default cartSlice.reducer;