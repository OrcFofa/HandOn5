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
      <Container className="menu" fluid >
        <Row>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <img src={logo} id="ims" alt="Logo da Breja"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse >
            <Nav.Link id="colors" href="/">Home</Nav.Link>
            <Nav.Link id="colors" href="#link">Sobre</Nav.Link>
            <Nav.Link id="colors" href="#link2">Cervejas </Nav.Link>
            <Nav.Link id="colors" href="/carrinho">Carrinho<img src={cart} id="ims2" alt="Imagem do carrinho de compras"/><Badge id="badgenav" bg="">9</Badge></Nav.Link>
            
            <Nav>
            <Nav.Link href="https://www.tiktok.com/@cervejaria_breja?_t=8Xa94fwGcKM&_r=1"><img src={tiktok} className="imgs" alt="Logo do TikTok"/></Nav.Link>
            <Nav.Link href="https://www.instagram.com/p/ClSEycCslDN/?igshid=MDJmNzVkMjY="><img src={insta} className="imgs" alt="Logo do Instagram"/></Nav.Link>
            <Nav.Link href="https://open.spotify.com/playlist/0ksJT1bvv7iCcML6sffMJX?si=IF01bM4MR-W59AvnjrEfMw&utm_source=copy-link"><img src={spotify} className="imgs" alt="Logo do Spotify"/></Nav.Link>
            </Nav>
        </Navbar.Collapse> 
      </Navbar>
      </Row>
      </Container>
    )
}

export default Menu