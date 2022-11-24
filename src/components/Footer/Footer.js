import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaWhatsapp } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import "../Footer/Footer.css"

function Footer ()  {
    return (
    <Container fluid xs={1} md={5} lg={6}>
        <Row>
            <Col className="feet">
               <p id="p1">Cervejaria Breja</p>
               <p className='frase'>Rua: São Judas N-320 , Bairro das Industrias ,Belo Horizonte -MG , CEP : 0000000</p>
               <p className='frase'><FaWhatsapp className='iconFooter'/>(31) 00000-0000</p>
               <p className='frase'><BiPhone className='iconFooter'/>(31) 00000-0000</p>
            </Col>
        </Row>
     </Container>
    )
}

export default Footer