import { createBrowserRouter } from "react-router-dom"
import { Cart } from "../pages/Cart";
import Home from "../pages/Home.js";
import { Products } from "../pages/Products";
import { Formulary } from "../pages/Formulary"

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
    {
        path: "/formulario",
        element: <Formulary />
    },  
      
    
])
;