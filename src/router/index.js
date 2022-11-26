import { createBrowserRouter } from "react-router-dom"
import { Cart } from "../pages/cart";
import Home from "../pages/Home.js";
import {About} from '../pages/About';
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