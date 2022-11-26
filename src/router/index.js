import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import { Cart } from "../pages/Cart";
import Beer from "../pages/Beer";
import Card from "../components/Card/Card.js";
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
    element: <Beer/>
},
{
    path: "/produtos",
    element: <Card/>
}
])
;