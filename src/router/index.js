import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import { Cart } from "../pages/Cart";
import { Products } from "../pages/Products";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/carrinho",
        element: <Cart/>
    },   
    {
        path: "/cervejas",
        element: <Products/>
    },   

])
;