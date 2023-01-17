import { useContext } from 'react';
import CarritoContext from "../contexts/CarritoContext";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Carrito() {

  const { carrito, setCarrito  } = useContext(CarritoContext)

    console.log(carrito)
    return (
      <Container>
      <div >
        <h1>Detalles del pedido</h1>
      </div>

      <div>
        {/* <ul>
        {carrito.listadoPizzas.map((pizza) => ( 
         <li key={pizza.id}><img src={pizza.img} width="80" alt="Imagenes pizza"/> {pizza.name}, {pizza.price}</li>  )
          )}
        
        </ul> */}
      </div>
      <div>
        {/* Total: $ {carrito.total} */}
      </div>


      </Container>

    );
  }
  