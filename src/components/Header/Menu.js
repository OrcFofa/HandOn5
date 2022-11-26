import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {Badge} from 'react-bootstrap';
import logo from "../../assets/img/logo.svg"
import {BsCart3} from "react-icons/bs";
import { FaTiktok, FaInstagram, FaSpotify} from "react-icons/fa";
import "../Header/Menu.css"


function Menu ()  {

  const cart = useSelector((state) => state.cart)

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
            <Nav.Link id="colors" href="/sobre">Sobre</Nav.Link>
            <Nav.Link id="colors" href="/cervejas">Cervejas </Nav.Link>
            <Nav.Link id="colors" href="/carrinho" className="sectionCart">Carrinho<BsCart3 className='iconCartHeader'/><Badge id="badgenav" bg="">{cart.cartItems.length}</Badge></Nav.Link>   
            <Nav>
            <Nav.Link href="https://www.tiktok.com/@cervejaria_breja?_t=8Xa94fwGcKM&_r=1"><FaTiktok className='iconHeader'/></Nav.Link>
            <Nav.Link href="https://www.instagram.com/p/ClSEycCslDN/?igshid=MDJmNzVkMjY="><FaInstagram className='iconHeader'/></Nav.Link>
            <Nav.Link href="https://open.spotify.com/playlist/0ksJT1bvv7iCcML6sffMJX?si=IF01bM4MR-W59AvnjrEfMw&utm_source=copy-link"><FaSpotify className='iconHeader'/></Nav.Link>
            </Nav>
        </Navbar.Collapse> 
      </Navbar>
      </Row>
      </Container>
    )
}

export default Menu