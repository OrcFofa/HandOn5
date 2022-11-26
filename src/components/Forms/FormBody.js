import {useForm} from "react-hook-form";
import {Form, Button} from "reactstrap";
import {api} from "../../service/api";
import "./FormBody.css";

export const FormBody = () => {
    const {register, setValue, handleSubmit} = useForm();

    const onSubmit = (e) => {
        console.log(e);
    };

    async function onBlurCep(e) {
        const {value} = e.target;

        const cep = value.replace(/[^0-9]/g, "");

        if (cep?.length !== 8) {
            return;
        }

        const {data} = await api.get("/addresses/" + cep);
        console.log(data);
        console.log(data.logradouro);
        setValue("logradouro", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("cidade", data.cidade);
        setValue("estado", data.estado)
    }

    return (
        <>
            <section>
                <h1 className="titleForm d-flex justify-content-center">
                    SEU PEDIDO SERÁ DIRECIONADO PARA O WHATSAPP, INFORME SEUS DADOS
                </h1>
                <div className="container d-flex justify-content-center">
                    <div className="form">
                        <Form>
                            <div class="form-group row titleInput">
                                <label class="col-sm-2 col-form-label">Nome:</label>
                                <div class="col-sm-10">
                                    <input class="form-control"
                                     placeholder="Digite seu nome"
                                     />
                                </div>
                            </div>
                            <div class="form-group row titleInput">
                                <label class="col-sm-2 col-form-label">Telefone</label>
                                <div class="col-sm-10">
                                    <input 
                                    class="form-control" 
                                    placeholder="Digite seu telefone"/>
                                </div>
                            </div>
                            <div class="form-group row titleInput" id="cep">
                                <label class="col-sm-1 col-form-label titleInput">CEP:</label>
                                <div class="col-sm-3">
                                    <input 
                                    class="form-control" 
                                    placeholder="Digite seu CEP"
                                    {...register("cep")}
                                    onBlur={onBlurCep}
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="form-group col-md-6">
                                    <label>Logradouro:</label>
                                    <input 
                                    type="text" 
                                    class="form-control"
                                    {...register("logradouro")}
                                    />
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Número:</label>
                                    <input type="text" class="form-control" placeholder="Nº"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="form-group col-md-6">
                                    <label>Bairro:</label>
                                    <input 
                                    type="text" 
                                    class="form-control"
                                    {...register("bairro")}
                                    />
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Complemento:</label>
                                    <input type="text" class="form-control" placeholder="Casa, Apartamento, Condominio"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="form-group col-md-6">
                                    <label>Cidade:</label>
                                    <input type="text" 
                                    class="form-control" 
                                    placeholder="Cidade"
                                    {...register("cidade")}
                                    />
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Estado:</label>
                                    <input
                                     type="text" 
                                     class="form-control" 
                                     placeholder="Estado"
                                     {...register("estado")}
                                     />
                                </div>
                            </div>
                        </Form>

                    </div>
                </div>
            </section>
            <div className="buttonForm">
                    <Button id="buttonSendForm"
                        onSubmit={
                            handleSubmit(onSubmit)
                    }>
                        Continuar
                    </Button>
                </div>
        </>
    );
};
