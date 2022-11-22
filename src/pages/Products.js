import "../styles/products.css"
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useEffect, useState } from "react";
import { api } from "../service/api";

export const Products = () => {

    const dispatch = useDispatch();

   const [ products, setProducts] = useState([]);

   useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await api.get("/products")
      setProducts(data)
    }
    fetchProducts();
   })

  return (

    <div className="productsItems">
    {
    products.map((product, index) => (
        <>
        <div key={index}>
          <img src={product.image} alt="imagem produto" />
          <span>{product.title}</span>
          </div>
          <span>{product.description}</span>
          <span>{product.details}</span>
          <span>{product.price}</span>
          <span></span>
          <button onClick={() => dispatch(addToCart(product))}>adicionar no carrinho</button>
        </>
    ))
    } </div>
  )
}


