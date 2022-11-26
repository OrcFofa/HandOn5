import { createBrowserRouter } from "react-router-dom"
import { Cart } from "../pages/Cart";
import Home from "../pages/Home.js";

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
        path: "/sobre",
        element: <About/>
    }

])
;