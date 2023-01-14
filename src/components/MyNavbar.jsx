import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import "../assets/css/myNavbar.css"

export default function MyNavbar() {

  return (
    <Navbar bg="info" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          {/* <Link className='links' to="/">🍕Pizzeria Mamma Mia! </Link> */}
          hola
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {/* <Link to="/carrito">🛒</Link> */}
          chao
          <Navbar.Brand>
            $134.640
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}

