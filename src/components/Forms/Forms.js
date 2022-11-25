import { useForm } from "react-hook-form";
import { Form, Row, FormGroup, Label, Col, Input, Button } from "reactstrap";
import { api } from "../../service/api";
import "./Forms.css";

export const Formss = () => {
  const { register, setValue, handleSubmit } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  async function onBlurCep(e) {
    const { value } = e.target;

    const cep = value.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    const { data } = await api.get("/addresses/" + cep);
    console.log(data);
    console.log(data.logradouro);
    setValue("logradouro", data.logradouro);
    setValue("bairro", data.bairro);
  }

  return (
    <>
      <section>
        <h5 className="title d-flex justify-content-center">
          SEU PEDIDO SERÁ DIRECIONADO PARA O WHATSAPP, INFORME SEUS DADOS
        </h5>
        <container className="container d-flex justify-content-center">
          <div className="form">
            <Form>
              <Row>
                <Col md={11}>
                  <FormGroup>
                    <Label className="nome" for="examplename">Nome</Label>
                    <Input
                      id="input"
                      name="name"
                      placeholder="Digite seu nome"
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleAddress">Endereço</Label>
                    <Input
                      className="form-control"
                      id="input"
                      placeholder="Av, Rua, Praça"
                      type="text"
                      {...register("logradouro")}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleAddress2">Complemento</Label>
                    <Input
                      id="input"
                      name="endereço"
                      placeholder="Casa, Apartamento, Condominio"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleCity">Cidade</Label>
                    <Input id="input" name="cidade" placeholder="Cidade" />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="exampleState">Estado - UF</Label>
                    <Input id="input" name="estado" placeholder="UF" />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleZip">CEP</Label>
                    <Input
                      id="input"
                      name="cep"
                      placeholder="Digite seu CEP"
                      {...register("cep")}
                      onBlur={onBlurCep}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <div className="buttons">
                <Button id="button" onSubmit={handleSubmit(onSubmit)}>
                  <p className="continuar">Continuar</p>
                </Button>
              </div>
            </Form>
          </div>
        </container>
      </section>
    </>
  );
};
