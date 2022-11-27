import {useEffect, useState} from "react";
import {api} from "../service/api"
import {Loading} from "../components/Loading/Loading";
import {ButtonComeBack} from "../components/ButtonComeBack/ButtonComeBack";
import Footer from "../components/Footer/Footer";
import ImageGrowler from "../assets/img/growler.png"
import {Link} from "react-router-dom";
import {addToCart} from "../store/cartSlice";
import "../styles/products.css"
import {useDispatch} from "react-redux";
import { Button } from "reactstrap";


export const Products = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await api.get("products")
            setProducts(data)
        } 
        fetchProducts();
        setIsLoading(false);
    }, []);


    if (isLoading) {
        return <Loading/>
    }


    return (
        <>
            <div className="containerProducts">
              <div  className="btnComeBackBeer">
                <ButtonComeBack/>
                </div>
                <h1 className="titleProducts">NOSSAS CERVEJAS EM UM SÓ LOCAL</h1>

                <div className="productsItems">
                    {
                    products.map((beer, index) => (
                        <div className='containerCardBeer' key={index}>
                            <img src={beer.image}alt=""/>
                            <h2 className='titleBeer'>{beer.title}</h2>
                            <span>{beer.description}</span>
                            <span>{beer.details}</span>
                            <div className='details'>
                                <span>R${beer.price}</span>
                                <button className='btnCard' onClick={() => dispatch(addToCart(beer))}>Comprar</button>
                            </div>
                        </div>
                    ))
                } </div>
                <div className="sectionGrowler">
                    <div className="imageGrowler">
                        <img src={ImageGrowler}
                            alt=""/>
                    </div>
                    <div className="contentGrowler">
                        <h2 className="titleGrowler">AINDA NÃO TEM UM GROWLER?</h2>
                        <span>Então tá ai 6 motivos para ter um e chamar de seu
                        </span>
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
                        <Link to="/growler">
                            <button className="btnGrowler">
                                Saiba mais
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
