import React from "react";
import { useContext } from "react"
import Item from "../components/Item"
import PizzasContext from '../contexts/PizzasContext';
import fotopizza from '../assets/img/pizza.PNG'

export default function Home() {
  const { pizzas, setPizzas } = useContext(PizzasContext)

  return (
      <div>
        {pizzas.map((product) => {
           return <Item key={product.id} desc={product.desc} id={product.id}
           img={product.img}  ingredients={product.ingredients} name={product.name}
           price={product.price} />;
        })}
      </div>
  );
};





// import { useNavigate } from "react-router";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import { useContext } from 'react';

// import fotopizza from '../assets/img/pizza.PNG'
// import CarritoContext from "../contexts/CarritoContext";
// import PizzasContext from '../contexts/PizzasContext';
// import "../assets/css/home.css"

// export default function Home() {

//   // eslint-disable-next-line
//   const { pizzas, setPizzas  } = useContext(PizzasContext)
//   const { carrito, setCarrito  } = useContext(CarritoContext)
//   const navigate = useNavigate();

//   const agregarAlCarrito = (id) => {
//     setCarrito((currItems) => {
//       const isItemsFound = currItems.find((item) => item.id === id);
//       if (isItemsFound) {
//         return currItems.map((item) => {
//           if (item.id === id) {
//             return { ...item, quantity: item.quantity + 1 };
//           } else {
//             return item;
//           }
//         });
//       } else {
//         return [...currItems, { id, quantity: 1, price }];
//       }
//     });
//   };

//   // const agregarAlCarrito = (id) => {
//   //   const pizzaIndex = pizzas.findIndex((f) => f.id === id)
//   //   console.log(pizzaIndex)
//   //   console.log("Agregando pizzas")
//   //   setCarrito({...carrito,  listadoPizzas:[...carrito.listadopizzas, pizzas[pizzaIndex]] })
//   //   // carrito.total = carrito.total + pizzas[pizzaIndex].price
//   // }

//   return (
//     <div>
//       <div className='pizza-background' style={{
//         backgroundImage: `url(${fotopizza})`,
//       }}>
//       </div>
//       <Container className="galeria grid-columns-3">
//         {pizzas.map((pizza) => (
//           <Card key={pizza.id} style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={pizza.img} />
//             <Card.Body>
//               <Card.Title>{pizza.name}</Card.Title>
//               <Card.Title>Ingredientes:</Card.Title>
//               <ul>
//                 {pizza.ingredients.map((ingredientes, id) => (
//                   <li className='listado-pizzas' key={id}>🍕 {ingredientes}
//                   </li>
//                 ))}
//               </ul>
//               <Card.Text>
//                 {pizza.price}
//                 {/* {pizza.desc} */}
//               </Card.Text>
//               <Button variant="primary" onClick={ () => navigate(`/pizza/${pizza.id}`) } >Ver más👀</Button>
//               <Button variant="danger" onClick={ ()=>  agregarAlCarrito(`${pizza.id}`) } >Añadir🛒</Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </Container>
//     </div>
//   );
// }
