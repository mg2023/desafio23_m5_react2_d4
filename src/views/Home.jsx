import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useContext } from 'react';

import fotopizza from '../assets/img/pizza.PNG'
import PizzasContext from "../contexts/PizzasContext";
import CarritoContext from "../contexts/CarritoContext";
import "../assets/css/home.css"

export default function Home() {

  const { pizzas } = useContext(PizzasContext)
  const { carrito, setCarrito  } = useContext(CarritoContext)
  const navigate = useNavigate();

  // const setDescrPizza = (id) => {
  //   const pizzaIndex = pizzas.findIndex((f) => f.id === id)
  //   setPizzaSeleccionada(pizzas[pizzaIndex])
  //   navigate(`/pizza/${id}`)
  // }

  const agregarAlCarrito = (id, price) => {
    // console.log(id)
    // console.log(price)
    setCarrito((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price }];
      }
    });
  };

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
              <Button variant="primary" onClick={() => navigate(`/pizza/${pizza.id}`) } >Ver más👀</Button>
              {/* Aca no entiendo por que al onclick no se le puede pasar una funcion directamente y tiene que ser con funcion flecha */}
              <Button variant="danger" onClick={() => agregarAlCarrito(pizza.id, pizza.price)}>Añadir🛒</Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}
