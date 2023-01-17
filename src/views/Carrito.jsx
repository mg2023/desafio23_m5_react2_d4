import { useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import CarritoContext from "../contexts/CarritoContext"

export default function Carrito() {

  const { carrito , setCarrito } = useContext(CarritoContext)

  const agregarAlCarrito = (id, price, name, img) => {
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
        return [...currItems, { id, quantity: 1, price , img, name }];
      }
    });
  };

  const restarAlCarrito = (id) => {
    setCarrito((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return carrito.find((item) => item.id === id)?.quantity || 0;
  };



  return (
    <Container>
      <div >
        <h1>Detalles del pedido</h1>
        <div>
          <ul>
            {carrito.map((item) => (
              <li key={item.id}>
                {<img src={item.img} alt="Imagen pizza" style={{ width: '100px', }} />}
                {item.name}
                {
                  getQuantityById(item.id) > 0 &&(
                    <Button variant="danger" onClick={() => restarAlCarrito(item.id)}> - </Button>
                  )
                }
                {item.quantity}
                <Button variant="primary" onClick={() => agregarAlCarrito(item.id, item.price, item.name, item.img)}> + </Button>                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

