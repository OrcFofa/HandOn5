import { createBrowserRouter } from "react-router-dom"
import Formulary from "../pages/Formulary";
import { Cart } from "../pages/Cart";
import App from "../pages/App";
import Growler from "../pages/Growler";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>
    },
    {
        path: "/formulario",
        element: <Formulary/>
    },
   
    {
        path: "/carrinho",
        element: <Cart/>
    },  
    {
        path:"/growler",
        element: <Growler/>
    }
]);

