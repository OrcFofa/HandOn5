import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import { Cart } from "../pages/Cart";
import Home from "../pages/home/Home.js";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/carrinho",
        element: <Cart/>
    },   
])
;