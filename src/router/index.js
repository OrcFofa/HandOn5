import { createBrowserRouter } from "react-router-dom"
import { Cart } from "../pages/Cart";
import Home from "../pages/Home.js";
import { Products } from "../pages/Products";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/carrinho",
        element: <Cart/>
    },  
    {
        path: "/cervejas",
        element: <Products />
    },  
    
])
;