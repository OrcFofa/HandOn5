import { Form, FormGroup,Label,Col,Input } from "reactstrap"
import "./Forms.css"

export const Formss = () => { 
  return (
  <> 
  <section> 
    <h5 className="text"> SEU PEDIDO SERÁ DIRECIONADO PARA O WHATSAAP, INFORME SEUS DADOS </h5> 
    <div className="form"> 
  
  <div className="forms"> 
<Form>
  <FormGroup row>
    <Label
      for="exampleEmail"
      sm={1}
    >
      Nome 
    </Label>
    <Col sm={6}>
      <Input
        id="input"
        name="name"
        placeholder="Digite seu nome"
        type="text"
      />
    </Col>
  </FormGroup>

  <FormGroup row>
    <Label
      for="exampleAdress"
      sm={1}
    >
      Endereço
    </Label>
    <Col sm={6}>
      <Input
        id="input"
        placeholder="Digite seu Endereço"
        type="text"
      />
    </Col>
  </FormGroup>

  <FormGroup row>
    <Label
      for="exampleAdress"
      sm={1}
    >
      CEP
    </Label>
    <Col sm={6}>
      <Input
        id="input"
        placeholder="Digite seu CEP"
        type="text"
      />
    </Col>
  </FormGroup>

  <FormGroup row>
    <Label
      for="exampletelphone"
      sm={1}
    >
      Telefone
    </Label>
    <Col sm={6}>
      <Input
        id="input"
        placeholder="Digite seu Telefone"
        type="text"
      />
    </Col>
  </FormGroup>
  
  </Form>
  </div>
  </div>
  </section>
  </>
  )
}