import { Card, CardHeader, Row, Col } from "reactstrap";
import { Background } from "../components/Background/Background";
import { ButtonFinishOrder } from "../components/Cart/ButtonFinishOrder";
import { NavBar } from "../components/Cart/NavBar";
import "../styles/Cart.css"

export const Cart = () => {
  return (
    <>
    <NavBar/>
    <Background>
      <Row xs="2" className="header">
        <Col>
        <h1>MEU CARRINHO</h1>
        </Col>
        <Col xs="auto">
        <ButtonFinishOrder/>
        </Col>
      </Row>
    <div className="containerCard">
        <Card>
          <CardHeader>
            <Row xs="5" className="titles">
              <Col> PRODUTO</Col>
              <Col> ENTREGA</Col>
              <Col> PREÇO</Col>
              <Col> QUANTIDADE</Col>
              <Col> TOTAL</Col>
            </Row>
          </CardHeader>
        </Card>
      </div>
      </Background>
      </>
  
  )
}
