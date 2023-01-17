import { useContext } from 'react';

import CarritoContext from "../contexts/CarritoContext";



export default function Carrito() {


  const { carrito, setCarrito  } = useContext(CarritoContext)
  console.log(carrito)

    return (
      <div >
        <h1>Detalle</h1>
      </div>
    );
  }
  