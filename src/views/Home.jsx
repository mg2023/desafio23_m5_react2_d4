// import fotopizza from '../assets/img/pizza-background2.jpg'
import fotopizza from '../assets/img/pizza.PNG'
import "../assets/css/home.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



// Aca hay que ver como desplegar varias card de forma dinamica en funcion de la api
// otra forma facil seria colocar los datos en 6 cards.

export default function Home() {
  return (
    <div>
      <div className='pizza-background' style={{
        backgroundImage: `url(${fotopizza})`,
      }}>
      </div>
      <Container className="mt-4 mb-4">
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Button variant="primary">Ver mas</Button>
                  <Button variant="danger">Añadir</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
