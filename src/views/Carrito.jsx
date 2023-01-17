import { useContext } from 'react';

import CarritoContext from "../contexts/CarritoContext";



export default function Carrito() {
  const { carrito, setCarrito  } = useContext(CarritoContext)
  console.log(carrito)


  //   const getQuantityById = (id) => {
  //   return carrito.find((item) => item.id === id)?.quantity || 0;
  // };

  // const quantityPerItem = getQuantityById(id);



    return (
      <div >
        <h1>Detalles del pedido</h1>
        <div>
            <ul>
            {carrito.map((item) => (
            <li key={item.id}> {item.id}, {item.quantity}, {item.price}</li>
            ))
            }
            </ul>
        </div>
      </div>
    );
  }
  