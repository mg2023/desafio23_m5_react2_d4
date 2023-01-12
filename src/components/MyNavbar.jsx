import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function MyNavbar() {


  return (
    <Navbar bg="info" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          🍕Pizzeria Mamma Mia!
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          🛒
          <Navbar.Brand>
            $134.640
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}

