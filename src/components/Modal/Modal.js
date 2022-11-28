import Modal from "react-modal";
import {useState} from "react";
import Logo from "../../assets/img/home-img/logo.png"
import "./Modal.css"


Modal.setAppElement('#root');


export function ModalOpen() {

    const [modalIsOpen, setIsOpen] = useState(true);

    function maiorIdade() {
        setIsOpen(false);
    }

    return (
        <>
            <Modal isOpen={modalIsOpen}
                className="modal-idade"
                contentLabel="Example Modal">
                <div className="bgModal">
                    <div className="containerModal">
                        <img src={Logo}
                            alt="logo"></img>
                        <h1>VOCÊ TEM MAIS DE 18 ANOS ?</h1>
                        <div>
                            <button onClick={maiorIdade}
                                className="btnYes">SIM</button>
                            <button className="btnNot">
                                <a href="https://www.google.com.br/">NÃO</a>
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
