

import "./CardProduct.css"

export const CardProduct = () => {

    const products = [{
            img: "https://s3-alpha-sig.figma.com/img/6f31/ad4b/f3e19fd5fd6b2f8514428afc5fb4847d?Expires=1669593600&Signature=HlIfczu-UY2vh1NIoq1XbWziwvE7G-EP80duKItfhYNoYG-FYZRRKSkf3AxzzDnJIBVZn8LzDyYmLu8WYzhdJHjmMh~aKQm2EHGCi3UgLAvs0nZ66k9LoauSK4dJeDipZVbu1xAp7vN9aJxHJnznV1aYud-JIUtTbN2fMrNWk8GbuNqND2RqdIxFEJmSMeuOOldIB0vdw2MmoF0-zWEOCtopTXQ5UqCF1k6fAbW9TztJsICqWeu-pX55G-Zv5kFZaWaBmkng4M4a-71BO55IyaYv9ezOnfFE7JsfpYxXczZFYxHguZLJnJGh1DyeJScUjLcZOevbOd6qzsMtA5K9Hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            title: "Cerveja Breja IPA 500ML",
            delivery: "a calcular",
            price: "R$25,00"
        }]

    return (
        <div className="product">
            {
            products.map(product => (
                <>
                <div className="imgAndTitle" key={product.id}>
                  <img src={product.img} alt="imagem produto" className="imgProduct"/>
                  <span>{product.title}</span>
                  </div>
                  <span>{product.delivery}</span>
                  <span>{product.price}</span>
                  <span></span>
                  <span>R$25,00</span>
                  <button className="btnRemove">X</button>
                </>
            ))
        } </div>
    )
}
