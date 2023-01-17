import { useContext } from 'react';

import Container from 'react-bootstrap/Container';

import CarritoContext from "../contexts/CarritoContext"

export default function Carrito() {

  const { carrito } = useContext(CarritoContext)

  return (
    <Container>
      <div >
        <h1>Detalles del pedido</h1>
        <div>
          <ul>
            {carrito.map((item) => (
              <li key={item.id}>
                {/* {<img src={item.img} alt="Imagen pizza" style={{ width: '100px', }} />} */}
                {item.name}
                {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

