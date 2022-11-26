import { createBrowserRouter } from "react-router-dom"
<<<<<<< HEAD
import { Cart } from "../pages/Cart";
import Home from "../pages/Home.js";
=======
import App from "../App";
import {About} from "../pages/About";
>>>>>>> dd9a4f9c38905d6816bf45665d9eea3e59c4f518

export const router = createBrowserRouter([
    {
        path: "/",
<<<<<<< HEAD
        element: <Home/>
    },
    {
        path: "/carrinho",
        element: <Cart/>
    },   
=======
        element: <App/>
    },
    {
        path:"/about",
        element: <About/>
    },
   
>>>>>>> dd9a4f9c38905d6816bf45665d9eea3e59c4f518
])
;