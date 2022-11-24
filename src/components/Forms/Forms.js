import { Form, FormGroup,Label,Col,Input,Button } from "reactstrap"
import "./Forms.css"

export const Formss = () => { 
  return (
  <> 
  <section> 
    <h5 className="title d-flex justify-content-center"> 
    SEU PEDIDO SERÁ DIRECIONADO PARA O WHATSAPP, INFORME SEUS DADOS 
    </h5> 
    <container className="container d-flex justify-content-center"> 
    <div className="form"> 
    
<Form id="form">
  <FormGroup row>
    <Label
      for="examplename"
      sm={2}
    >
      Nome
    </Label>
    <Col sm={10}>
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
      sm={2}
    >
      Endereço
    </Label>
    <Col sm={10}>
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
      sm={2}
    >
      CEP
    </Label>
    <Col sm={10}>
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
      sm={2}
    >
      Telefone
    </Label>
    <Col sm={10}>
      <Input
        id="input"
        placeholder="Digite seu Telefone"
        type="Phone"
      />
    </Col>
  </FormGroup>
  <div className="buttons">
  <Button 
        id="button" >
        <p className="continuar"> 
        CONTINUAR 
        </p>  
  </Button>
  </div>
  </Form>
  
  </div>
  </container>
  </section>
  </>
  )
}