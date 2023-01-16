// import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useContext , useState, useEffect } from 'react';

import PizzasContext from "../contexts/PizzasContext";
import "../assets/css/pizza.css"


export default function Pizza() {
  let { id } = useParams();
  const [pizzaSeleccionada, setPizzaSeleccionada] = useState({})
  const { pizzas } = useContext(PizzasContext)
  const pizzaIndex = pizzas.findIndex((f) => f.id === id)

  useEffect(() => {
    setPizzaSeleccionada(pizzas[pizzaIndex])       
}, [pizzas,pizzaIndex])

  if (pizzaSeleccionada) {
    return (
    <Container className="detalle-pizza">
      <div>
          <img className="img-pizza-seleccionada" src={pizzaSeleccionada.img} alt="imagen de referencia pizza" />
        </div>
      <div> {pizzaSeleccionada.desc}</div>
    </Container>
    )
}
else {
    return (
        <>
        </>
    )
}
}
