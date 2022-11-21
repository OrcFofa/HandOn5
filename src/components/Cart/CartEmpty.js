import {RiShoppingCart2Line} from "react-icons/ri";
import { Button } from "reactstrap"
import "./CartEmpty.css"

export const CartEmpty = () => {
  return (
    <div className="bodyCartEmpty">
          <RiShoppingCart2Line className="iconCart"/>
        <h1>O carrinho está vazio</h1>
        <span>adicione produtos clicando no botão</span>
        <span>"comprar" na página de produtos</span>
        <Button>IR PARA PÁGINA DE PRODUTOS</Button>
    </div>
  )
}
