import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import {Sobre} from "../pages/Sobre";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path:"/Sobre",
        element: <Sobre/>
    },
   
])
;