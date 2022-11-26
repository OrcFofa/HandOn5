import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import { router } from "./router";
import { ToastContainer } from "react-toastify"
<<<<<<< HEAD
import Menu from './components/Header/Menu';
=======
import Menu from "../src/components/Header/Menu";
>>>>>>> dd9a4f9c38905d6816bf45665d9eea3e59c4f518
import store from './store/store';
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.min.css';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer />
<<<<<<< HEAD
    <Menu/>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
=======
    <Menu />
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
>>>>>>> dd9a4f9c38905d6816bf45665d9eea3e59c4f518
