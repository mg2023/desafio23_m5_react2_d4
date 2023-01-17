import { useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import CarritoContext from "../contexts/CarritoContext"
import "../assets/css/carrito.css"

export default function Carrito() {

  const { carrito, setCarrito } = useContext(CarritoContext)

  const agregarAlCarrito = (id, price, name, img) => {
 
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
        return [...currItems, { id, quantity: 1, price, img, name }];
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

  const totalPrice = carrito.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );


  return (
    <Container className='mt-2'>
      <div >
        <h3>Detalles del pedido</h3>
        <div>
          <ul className='listado-compra'>
            {carrito.map((item) => (
              <li key={item.id}>

                <div className="row">
                  <div className="col-2">
                    {<img src={item.img} alt="Imagen pizza" style={{ width: '100px', }} />}
                  </div>
                  <div className="col-2 name-pizza">
                    <p>{item.name}</p>
                  </div>
                  <div className="col-5">
        
                  </div>
                  <div className="col-1">
                    {
                      getQuantityById(item.id) > 0 && (
                        <Button variant="danger" onClick={() => restarAlCarrito(item.id)}> - </Button>
                      )
                    }
                  </div>
                  <div className="col-1">
                  {item.quantity}
                  </div>
                  <div className="col-1">
                    <Button variant="primary" onClick={() => agregarAlCarrito(item.id, item.price, item.name, item.img)}> + </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className='valor-total-carrito'>
          Total: ${totalPrice}
          </div>
          <Button variant="danger">Pagar</Button>
        </div>
      </div>
    </Container>
  );
}

// return (
//   <Container className='mt-2'>
//     <div >
//       <h3>Detalles del pedido</h3>
//       <div>
//         <ul className='listado-compra'>
//           {carrito.map((item) => (
//             <li key={item.id}>
//               <div className='contenedor-img-carrito'>
//                 {<img src={item.img} alt="Imagen pizza" style={{ width: '100px', }} />}
//               </div>
//               {item.name}
//               {
//                 getQuantityById(item.id) > 0 &&(
//                   <Button variant="danger" onClick={() => restarAlCarrito(item.id)}> - </Button>
//                 )
//               }
//               {item.quantity}
//               <Button variant="primary" onClick={() => agregarAlCarrito(item.id, item.price, item.name, item.img)}> + </Button>
//             </li>
//           ))}
//         </ul>
//         <div>
//           Total: ${totalPrice}
//         </div>
//       </div>
//     </div>
//   </Container>
// );

