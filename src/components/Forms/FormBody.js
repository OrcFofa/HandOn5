import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../../service/api";
import {getTotal} from "../../store/cartSlice";
import "./FormBody.css";

export const FormBody = () => {


    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch()
    const {register, setValue, getValues} = useForm();

    async function onBlurCep(e) {
        const {value} = e.target;

        if (! e.target.value) 
            return;
        

        const cep = value.replace(/[^0-9]/g, "");

        if (cep?.length !== 8) {
            return;
        }

        const {data} = await api.get("/addresses/" + cep);

        setValue("logradouro", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("cidade", data.cidade);
        setValue("estado", data.estado)
    }


    const handleReset = () => {

        setValue("name", "");
        setValue("phone", "");
        setValue("cep", "");
        setValue("number", "");
        setValue("logradouro", "");
        setValue("bairro", "");
        setValue("cidade", "");
        setValue("estado", "");
        setValue("complemento", "")
    }


    function integrateWhatsapp() {

        if (getValues("name") === "" || getValues("number") === "" || getValues("cep") === "" || getValues("phone") === "") {
            alert("Preencha todos os campos!")
        } else {
            window.location.href = `https://wa.me/5511977484877?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido.%0A%0ANome%3A%20${getValues("name")}%0A%0AProdutos%3A%0A%0A${
                cart.cartItems.map(cartItem => (`${cartItem.cartQuantity}. ${cartItem.title} R$${cartItem.price}%0A%0A`))}Total%3A%20R$${`R$${cart.cartTotalAmount}`}%0A%0AEndere%C3%A7o%3A${` ${getValues("logradouro")} , número ${getValues("number")} ,${getValues("bairro")}. - ${getValues("cidade")} - ${getValues("estado")}.%0A%0A${`Complemento: ${getValues("complemento")}.`}`}`
        }
    }


    function sendOrder() {
        integrateWhatsapp();
        handleReset();
    };

    useEffect(() => {
        dispatch(getTotal());
    })

    return (
        <>
            <section>
                <h1 className="titleForm d-flex justify-content-center">
                    SEU PEDIDO SERÁ DIRECIONADO PARA O WHATSAPP, INFORME SEUS DADOS
                </h1>
                <div className="container d-flex justify-content-center">
                    <div className="form">
                        <form>
                            <div className="form-group row titleInput">
                                <label className="col-sm-2 col-form-label">Nome:</label>
                                <div className="col-sm-10">
                                    <input 
                                    className="form-control" 
                                    placeholder="Digite seu nome" 
                                    {...register("name")}/>
                                </div>
                            </div>
                            <div className="form-group row titleInput">
                                <label className="col-sm-2 col-form-label">Telefone</label>
                                <div className="col-sm-10">
                                    <input 
                                    className="form-control" 
                                    placeholder="Digite seu telefone" 
                                    {...register("phone")}/>
                                </div>
                            </div>
                            <div className="form-group row titleInput" id="cep">
                                <label className="col-sm-1 col-form-label titleInput">CEP:</label>
                                <div className="col-sm-3">
                                    <input 
                                        className="form-control" 
                                        placeholder="Digite seu CEP" 
                                        {...register("cep")}
                                        onBlur={onBlurCep}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="form-group col-md-6">
                                    <label>Logradouro:</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    {...register("logradouro")}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Número:</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nº" 
                                    {...register("number")}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="form-group col-md-6">
                                    <label>Bairro:</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    {...register("bairro")}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Complemento:</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Casa, Apartamento, Condominio"
                                    {...register("complemento")}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="form-group col-md-6">
                                    <label>Cidade:</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Cidade" 
                                    {...register("cidade")}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Estado:</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Estado" 
                                    {...register("estado")}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <div className="buttonForm">
                <button id="buttonSendForm"
                    onClick={sendOrder}>
                    Continuar
                </button>
            </div>
        </>
    );
};
