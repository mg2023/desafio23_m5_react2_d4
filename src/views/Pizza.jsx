import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import DescrPizzaContext from "../contexts/DescrPizzaContext";
import "../assets/css/pizza.css"

export default function Pizza() {
  // eslint-disable-next-line
  const { pizzaSeleccionada, setPizzaSeleccionada  } = useContext(DescrPizzaContext)
  
  return (
      <Container className="detalle-pizza">
        hola
        {/* <div> {pizzas[2].img} </div> */}
        <div> {pizzaSeleccionada.desc}</div>
      </Container>
    );
  }
  