import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import whats from "../../assets/img/Vector.svg"
import phone from "../../assets/img/Vector.png"
import "../Footer/Footer.css"

function Footer ()  {
    return (
    <Container fluid xs={1} md={5} lg={6}>
        <Row>
            <Col className="feet">
               <p id="p1">Cervejaria Breja</p>
               <p>Rua: São Judas N-320 , Bairro das Industrias ,Belo Horizonte -MG , CEP : 0000000</p>
               <p><img className="imag" src={whats} width="25" height="25" alt="Logo do Whatsapp"/>(31) 00000-0000</p>
               <p><img className="imag" src={phone} width="25" height="25" alt="Imagem de um telefone"/>(31) 00000-0000</p>
            </Col>
        </Row>
     </Container>
    )
}

export default Footer