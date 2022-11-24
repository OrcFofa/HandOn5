import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {Badge} from 'react-bootstrap';
import logo from "../../assets/img/logo.png"
import tiktok from "../../assets/img/tiktok.png"
import cart from "../../assets/img/cart.png"
import insta from "../../assets/img/insta.png"
import spotify from "../../assets/img/spotify.png"
import "../Header/Menu.css"


function Menu ()  {
    return (
      <Container className="menu" fluid xs={1} md={5} lg={6}>
        <Row>
        <Navbar>
          <Navbar.Brand href="#home">
            <img src={logo} width="50" height="45" alt="Logo da Breja"/>
          </Navbar.Brand>
             
          <Navbar.Collapse >
            <Nav.Link className="path" href="#links">Home</Nav.Link>
            <Nav.Link className="path" href="#link">Sobre</Nav.Link>
            <Nav.Link className="path" href="#link2">Cervejas </Nav.Link>
            <Nav.Link className="path" href="../../pages/Cart">Carrinho<img src={cart} width="25" height="25" alt="Imagem do carrinho de compras"/><Badge id="badgenav" bg="">9</Badge></Nav.Link>
            
            <Nav>
            <Nav.Link id="barrier" className="icones" href="#link4"><img src={tiktok} width="25" height="25" alt="Logo do TikTok"/></Nav.Link>
            <Nav.Link className="icones" href="#link5"><img src={insta} width="25" height="25" alt="Logo do Instagram"/></Nav.Link>
            <Nav.Link className="icones" href="#link6"><img src={spotify} width="25" height="25" alt="Logo do Spotify"/></Nav.Link>
            </Nav>
        </Navbar.Collapse> 
      </Navbar>
      </Row>
      </Container>
    )
}

export default Menu