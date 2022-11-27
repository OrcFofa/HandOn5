import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { addToCart } from "../store/cartSlice";
import { useEffect, useState } from "react";
import { api } from "../service/api"
import { Loading } from "../components/Loading/Loading";
import { ButtonComeBack } from "../components/ButtonComeBack/ButtonComeBack";
import Footer from "../components/Footer/Footer";
import ImageGrowler from "../assets/img/growler.png"
import "../styles/products.css"
import { Link } from "react-router-dom";


export const Products = () => {
    
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      const fetchProducts = async () => {
          const { data } = await api.get("products")
          console.log(data)
          setProducts(data)
      }
      fetchProducts();
      setLoading(false);
  }, []);

  if(isLoading){
    return <Loading/>
  }
  
    
  return (
    <>
    <div className="containerProducts">
    <ButtonComeBack/>
    <h1 className="titleProducts">NOSSAS CERVEJAS EM UM SÓ LOCAL</h1>

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
       <div className="sectionGrowler">
        <div className="imageGrowler">
          <img src={ImageGrowler} alt="" />
        </div>
        <div className="contentGrowler">
        <h2 className="titleGrowler">AINDA NÃO TEM UM GROWLER?</h2>
        <span>Então tá ai 6 motivos para ter um e chamar de seu </span>
          <ol>
          <div>
          <li>Mais aroma e sabor</li>
          <li>Mais econômico</li>
          <li>Mais sustentável</li>
          </div>
          <div>
          <li>Mais liberdade</li>
          <li>Mais variedade</li>
          <li>Estimula a economia local</li>
          </div>
          </ol>
           <Link to="/" className="growle">
           <button className="btnGrowler">
          Saiba mais
           </button>    
        </Link>

        </div>
      
       </div>
     </div>
    <Footer />
    </>
  )
}


