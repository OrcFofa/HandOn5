import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import { router } from "./router";
import { ToastContainer } from "react-toastify"
import store from './store/store';
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.min.css';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer />
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);