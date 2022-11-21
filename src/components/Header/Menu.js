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
import "./Menu.css"


function Menu ()  {
    return (
      <Container fluid>
        <Row>
        <Navbar className="menu">
          <Navbar.Brand href="#home">
            <img src={logo} width="100" height="45" alt="Logo da Breja"/>
          </Navbar.Brand>
             
          <Navbar.Collapse >
            <Nav.Link className="links" href="#links">Home</Nav.Link>
            <Nav.Link className="links" href="#link">Sobre</Nav.Link>
            <Nav.Link className="links" href="#link2">Cervejas </Nav.Link>
            <Nav.Link className="links" href="../../pages/Cart">Carrinho<img src={cart} width="25" height="25" alt="Imagem do carrinho de compras"/><Badge id="badgenav" bg="">9</Badge></Nav.Link>
            
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