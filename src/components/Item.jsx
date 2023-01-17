import React, { useContext } from "react";
import CarritoContext from "../contexts/CarritoContext";
import "../assets/css/home.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router";
import fotopizza from '../assets/img/pizza.PNG'

export default function Item  ({ desc, id, img, ingredients, name, price }) {
  const [carrito, setCarrito] = useContext(CarritoContext);
  const navigate = useNavigate();


//   const addToCart = () => {
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

//   const removeItem = (id) => {
//     setCarrito((currItems) => {
//       if (currItems.find((item) => item.id === id)?.quantity === 1) {
//         return currItems.filter((item) => item.id !== id);
//       } else {
//         return currItems.map((item) => {
//           if (item.id === id) {
//             return { ...item, quantity: item.quantity - 1 };
//           } else {
//             return item;
//           }
//         });
//       }
//     });
//   };

//   const getQuantityById = (id) => {
//     return carrito.find((item) => item.id === id)?.quantity || 0;
//   };

//   const quantityPerItem = getQuantityById(id);


  return (
    <div>
    <div className='pizza-background' style={{
        backgroundImage: `url(${fotopizza})` }}>
        </div>
      <Container className="galeria grid-columns-3">   
          <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Title>Ingredientes:</Card.Title>
              <ul>
                {ingredients.map((ingredientes, id) => (
                  <li className='listado-pizzas' key={id}>🍕 {ingredientes}
                  </li>
                ))}
              </ul>
              <Card.Text>
                {price}
                {/* {pizza.desc} */}
              </Card.Text>
              <Button variant="primary" onClick={ () => navigate(`/pizza/${id}`) } >Ver más👀</Button>
              {/* <Button variant="danger" onClick={ ()=>  addToCart() } >Añadir🛒</Button> */}
            </Card.Body>
          </Card>
      </Container>
      </div>
  );
};
