// import fotopizza from '../assets/img/pizza-background2.jpg'
import fotopizza from '../assets/img/pizza.PNG'
import "../assets/css/home.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import MyContext from "../contexts/PizzasContext";
import { useNavigate } from "react-router";

// Aca hay que ver como desplegar varias card de forma dinamica en funcion de la api
// otra forma facil seria colocar los datos en 6 cards.

export default function Home() {

  const { pizzas  } = useContext(MyContext)
  const navigate = useNavigate();

  return (
    <div>
      <div className='pizza-background' style={{
        backgroundImage: `url(${fotopizza})`,
      }}>
      </div>
      <Container className="galeria grid-columns-3">
        {pizzas.map((pizza) => (
          <Card key={pizza.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <Card.Title>Ingredientes:</Card.Title>
              <ul>
                {pizza.ingredients.map((ingredientes, id) => (
                  <li className='listado-pizzas' key={id}>🍕 {ingredientes}
                  </li>
                ))}
              </ul>
              <Card.Text>
                {pizza.price}
                {/* {pizza.desc} */}
              </Card.Text>
              <Button variant="primary" onClick={() => navigate(`/pizza/${pizza.id}`)} >Ver más👀</Button>
              <Button variant="danger">Añadir🛒</Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}
