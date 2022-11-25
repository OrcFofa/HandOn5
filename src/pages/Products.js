import "../styles/products.css"
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useEffect, useState } from "react";
import { api } from "../service/api"

export const Products = () => {
    
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchProducts = async () => {
          const { data } = await api.get("products")
          console.log(data)
          setProducts(data)
      }
      fetchProducts();
  }, []);
  
    
  return (

    <div className="productsItems">
     {
    products.map(product => (
        <>
          <img src={product.image} alt="imagem produto" />
          <span>{product.title}</span>     
          <span>{product.description}</span>
          <span>{product.price}</span>
          <button onClick={() => dispatch(addToCart(product))}>adicionar no carrinho</button>
        </>
    ))
    } </div> 
  )
}


