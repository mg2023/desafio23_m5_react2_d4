import { useParams } from "react-router";
import MyContext from "../contexts/PizzasContext";
import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import "../assets/css/pizza.css"



export default function Pizza() {
  const { pizzas  } = useContext(MyContext)
  const { id } = useParams();
  const [pizzaSeleccionada, setPizzaSeleccionada] = useState()

  console.log(id)
  console.log(pizzas)

  const pizzaIndex = pizzas.findIndex((f) => f.id === id)

  //Esto causa error
  // setPizzaSeleccionada(pizzas[pizzaIndex])
  // console.log(pizzas[pizzaIndex])
   

  
  
  return (
      <Container className="detalle-pizza">
        hola
        {/* <div> {pizzas[2].img} </div> */}
        {/* <div> {pizzas[2].desc}</div> */}
      </Container>
    );
  }
  