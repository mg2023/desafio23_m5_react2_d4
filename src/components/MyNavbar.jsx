import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import "../assets/css/myNavbar.css"

export default function MyNavbar() {

  return (
    <Navbar bg="info" variant="dark">
      <Container className='myNavbar'>
        <div>
          <Link className='links' to="/">🍕Pizzeria Mamma Mia! </Link>
        </div>
        <Navbar.Collapse className="justify-content-end">
          <Link to="/carrito">🛒</Link>
          <div className='links' >
            $134.640
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}
