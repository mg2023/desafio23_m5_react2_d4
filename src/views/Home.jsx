// import fotopizza from '../assets/img/pizza-background2.jpg'
import fotopizza from '../assets/img/pizza.PNG'
import "../assets/css/home.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useContext } from 'react';
import MyContext from "../my_context";



// Aca hay que ver como desplegar varias card de forma dinamica en funcion de la api
// otra forma facil seria colocar los datos en 6 cards.

export default function Home() {

  const { pizzas, setPizzas } = useContext(MyContext)

  console.log(pizzas.ingredients)

  return (
    <div>
      <div className='pizza-background' style={{
        backgroundImage: `url(${fotopizza})`,
      }}>
      </div>
      <Container className="mt-4 mb-4">
        {pizzas.map((pizza, id) => (
          <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <Card.Title>Ingredientes:</Card.Title>
              <Card.Text>
                <ul>
                  {pizza.ingredients.map((ingredientes, id) => (
                    <li className='listado-pizzas' key={id}>🍕 {ingredientes}
                    </li>
                  ))}
                </ul>
                 {pizza.price}
                {/* {pizza.desc} */}
              </Card.Text>
              <Button variant="primary">Ver más👀</Button>
              <Button variant="danger">Añadir🛒</Button>
            </Card.Body>
          </Card>

          // <div key={id} >
          //   <p>{pizza.desc}</p>
          // </div>

        ))}

        {/* 
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 1 }).map((_, idx, pizza) => (
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    {pizza[0].desc}
                  </Card.Text>
                  <Button variant="primary">Ver mas</Button>
                  <Button variant="danger">Añadir</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */}


      </Container>
    </div>
  );
}
