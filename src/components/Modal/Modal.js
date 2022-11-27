import Modal from "react-modal";
import React from "react";
import { useState } from "react";
import "./Modal.css"


Modal.setAppElement('#root');



export default function Modall(){
    
    const [modalIsOpen, setIsOpen] = useState(true);

    function maiorIdade(){
        setIsOpen(false);
    }
    
   

    return(
      <>
      <Modal
      isOpen={modalIsOpen}
      className="modal-idade"
      contentLabel="Example Modal"

      >
        <h2>Olá seja bem vindo!</h2>
        <h4>Você é maior de 18 anos?</h4>
        <button onClick={maiorIdade}>Sim</button>
        <a href="https://www.minhavida.com.br/materias/materia-21681"><button>Não</button></a>
      </Modal>
      </>
    )
}