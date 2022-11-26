import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
<<<<<<< HEAD
import {FaWhatsapp } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
=======
import whats from "../../assets/img/Vector.svg"
import phone from "../../assets/img/Vector.png"
>>>>>>> dd9a4f9c38905d6816bf45665d9eea3e59c4f518
import "../Footer/Footer.css"

function Footer ()  {
    return (
    <Container fluid xs={1} md={5} lg={6}>
        <Row>
            <Col className="feet">
               <p id="p1">Cervejaria Breja</p>
<<<<<<< HEAD
               <p className='frase'>Rua: São Judas N-320 , Bairro das Industrias ,Belo Horizonte -MG , CEP : 0000000</p>
               <p className='frase'><FaWhatsapp className='iconFooter'/>(31) 00000-0000</p>
               <p className='frase'><BiPhone className='iconFooter'/>(31) 00000-0000</p>
=======
               <p>Rua: São Judas N-320 , Bairro das Industrias ,Belo Horizonte -MG , CEP : 0000000</p>
               <p><img src={whats} width="25" height="25" alt="Logo do Whatsapp"/>(31) 00000-0000</p>
               <p><img src={phone} width="25" height="25" alt="Imagem de um telefone"/>(31) 00000-0000</p>
>>>>>>> dd9a4f9c38905d6816bf45665d9eea3e59c4f518
            </Col>
        </Row>
     </Container>
    )
}

export default Footer