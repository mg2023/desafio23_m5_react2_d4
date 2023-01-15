import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useContext } from 'react';

import fotopizza from '../assets/img/pizza.PNG'
import PizzasContext from "../contexts/PizzasContext";
import DescrPizzaContext from '../contexts/DescrPizzaContext';
import "../assets/css/home.css"



export default function Home() {

  // eslint-disable-next-line
  const { pizzas, setPizzas  } = useContext(PizzasContext)
  // eslint-disable-next-line
  const { pizzaSeleccionada, setPizzaSeleccionada  } = useContext(DescrPizzaContext)
  const navigate = useNavigate();

  const setDescrPizza = (id) => {
    const pizzaIndex = pizzas.findIndex((f) => f.id === id)
    setPizzaSeleccionada(pizzas[pizzaIndex])
    navigate(`/pizza/${id}`)
  }

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
              <Button variant="primary" onClick={() => setDescrPizza(pizza.id) } >Ver más👀</Button>
              <Button variant="danger">Añadir🛒</Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}
