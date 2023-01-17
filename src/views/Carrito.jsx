import { useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import PizzasContext from "../contexts/CarritoContext";
import CarritoContext from "../contexts/CarritoContext"


// export default function Carrito() {
const Carrito = (pizzas) => {
  //Aca falla el use de context, y esta identico en la vista pizza
  // const { pizzas } = useContext(PizzasContext)
  const { carrito, setCarrito } = useContext(CarritoContext)

  // console.log(carrito)
  // console.log(pizzas)

  console.log(typeof(pizzas))
  //   const getQuantityById = (id) => {
  //   return carrito.find((item) => item.id === id)?.quantity || 0;
  // };

  // const quantityPerItem = getQuantityById(id);


  // console.log(pizzas.filter(pizza => pizza.id === 'P002') )     

  return (
    <Container>
      hola
      {/* <div >
        <h1>Detalles del pedido</h1>
        <div>
            <ul>
            {carrito.map((item) => (
            <li key={item.id}>
                {item.id}, {item.quantity}, {item.price} </li>
            ))
            }
            </ul>
        </div>
      </div> */}
    </Container>
  );
}

export default Carrito