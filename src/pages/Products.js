import "../styles/products.css"
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export const Products = () => {

    const dispatch = useDispatch();

    const products = [{
        id: "1",
        img: "https://s3-alpha-sig.figma.com/img/6f31/ad4b/f3e19fd5fd6b2f8514428afc5fb4847d?Expires=1669593600&Signature=HlIfczu-UY2vh1NIoq1XbWziwvE7G-EP80duKItfhYNoYG-FYZRRKSkf3AxzzDnJIBVZn8LzDyYmLu8WYzhdJHjmMh~aKQm2EHGCi3UgLAvs0nZ66k9LoauSK4dJeDipZVbu1xAp7vN9aJxHJnznV1aYud-JIUtTbN2fMrNWk8GbuNqND2RqdIxFEJmSMeuOOldIB0vdw2MmoF0-zWEOCtopTXQ5UqCF1k6fAbW9TztJsICqWeu-pX55G-Zv5kFZaWaBmkng4M4a-71BO55IyaYv9ezOnfFE7JsfpYxXczZFYxHguZLJnJGh1DyeJScUjLcZOevbOd6qzsMtA5K9Hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        title: "Cerveja Breja IPA 500ML",
        delivery: "a calcular",
        price: "25,00"
    },
    {   id: "2",
        img: "https://s3-alpha-sig.figma.com/img/6f31/ad4b/f3e19fd5fd6b2f8514428afc5fb4847d?Expires=1669593600&Signature=HlIfczu-UY2vh1NIoq1XbWziwvE7G-EP80duKItfhYNoYG-FYZRRKSkf3AxzzDnJIBVZn8LzDyYmLu8WYzhdJHjmMh~aKQm2EHGCi3UgLAvs0nZ66k9LoauSK4dJeDipZVbu1xAp7vN9aJxHJnznV1aYud-JIUtTbN2fMrNWk8GbuNqND2RqdIxFEJmSMeuOOldIB0vdw2MmoF0-zWEOCtopTXQ5UqCF1k6fAbW9TztJsICqWeu-pX55G-Zv5kFZaWaBmkng4M4a-71BO55IyaYv9ezOnfFE7JsfpYxXczZFYxHguZLJnJGh1DyeJScUjLcZOevbOd6qzsMtA5K9Hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        title: "Cerveja Breja IPA 1LT",
        delivery: "a calcular",
        price: "30,00"
    },

    {   id: "3",
    img: "https://s3-alpha-sig.figma.com/img/6f31/ad4b/f3e19fd5fd6b2f8514428afc5fb4847d?Expires=1669593600&Signature=HlIfczu-UY2vh1NIoq1XbWziwvE7G-EP80duKItfhYNoYG-FYZRRKSkf3AxzzDnJIBVZn8LzDyYmLu8WYzhdJHjmMh~aKQm2EHGCi3UgLAvs0nZ66k9LoauSK4dJeDipZVbu1xAp7vN9aJxHJnznV1aYud-JIUtTbN2fMrNWk8GbuNqND2RqdIxFEJmSMeuOOldIB0vdw2MmoF0-zWEOCtopTXQ5UqCF1k6fAbW9TztJsICqWeu-pX55G-Zv5kFZaWaBmkng4M4a-71BO55IyaYv9ezOnfFE7JsfpYxXczZFYxHguZLJnJGh1DyeJScUjLcZOevbOd6qzsMtA5K9Hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "Cerveja Breja 1LT",
    delivery: "a calcular",
    price: "35,00"
   },

   {  id: "4",
   img: "https://s3-alpha-sig.figma.com/img/6f31/ad4b/f3e19fd5fd6b2f8514428afc5fb4847d?Expires=1669593600&Signature=HlIfczu-UY2vh1NIoq1XbWziwvE7G-EP80duKItfhYNoYG-FYZRRKSkf3AxzzDnJIBVZn8LzDyYmLu8WYzhdJHjmMh~aKQm2EHGCi3UgLAvs0nZ66k9LoauSK4dJeDipZVbu1xAp7vN9aJxHJnznV1aYud-JIUtTbN2fMrNWk8GbuNqND2RqdIxFEJmSMeuOOldIB0vdw2MmoF0-zWEOCtopTXQ5UqCF1k6fAbW9TztJsICqWeu-pX55G-Zv5kFZaWaBmkng4M4a-71BO55IyaYv9ezOnfFE7JsfpYxXczZFYxHguZLJnJGh1DyeJScUjLcZOevbOd6qzsMtA5K9Hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
   title: "Cerveja IPA 1LT",
   delivery: "a calcular",
   price: "40,00"
    }
]

  return (

    <div className="productsItems">
    {
    products.map(product => (
        <>
        <div>
          <img src={product.img} alt="imagem produto" />
          <span>{product.title}</span>
          </div>
          <span>{product.delivery}</span>
          <span>{product.price}</span>
          <span></span>
          <button onClick={() => dispatch(addToCart(product))}>adicionar no carrinho</button>
        </>
    ))
    } </div>
  )
}


