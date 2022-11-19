import { createBrowserRouter } from "react-router-dom"

import Formulary from "../pages/Formulary";

export const router = createBrowserRouter([
    {
        path: "/formulary",
        element: <Formulary/>
    },
   
]);