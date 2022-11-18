import { Navbar, NavbarBrand } from "reactstrap";
import Logo from "../../assets/logo.png"
import "./NavBar.css"


export const NavBar = () => {
  return (
    <>
  <Navbar
    color="black"
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src={Logo}
        style={{
          height: 100,
          width: 150
        }}
      />
    </NavbarBrand>
  </Navbar>
  </>
  )
}
