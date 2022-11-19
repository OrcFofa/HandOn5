import React from 'react';
import "./Menu.css"
import {Container} from 'reactstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import logo from "../../assets/img/logo.png"
import tiktok from "../../assets/img/tiktok.png"
import cart from "../../assets/img/cart.png"
import insta from "../../assets/img/insta.png"
import spotify from "../../assets/img/spotify.png"

function Menu ()  {
    return (
        <Navbar className="" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="110"
              height="50"
              alt="Logo da Breja"
            />
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Sobre</Nav.Link>
            <Nav.Link href="#link2">Cervejas</Nav.Link>
            <Nav.Link href="#link3"><img src={cart} width="25" height="25" alt="Imagem do carrinho de compras"/></Nav.Link>

            

            <Nav.Link href="#link4"><img src={tiktok} width="25" height="25" alt="Logo do TikTok"/></Nav.Link>
            <Nav.Link href="#link5"><img src={insta} width="25" height="25" alt="Logo do Instagram"/></Nav.Link>
            <Nav.Link href="#link6"><img src={spotify} width="25" height="25" alt="Logo do Spotify"/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Menu