import { useParams } from "react-router";
import MyContext from "../my_context";
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import "../assets/css/pizza.css"



export default function Pizza() {
  const { pizzas  } = useContext(MyContext)
  const { id } = useParams();

  console.log(id)
  console.log(pizzas)
    

  
  
  return (
      <Container className="detalle-pizza">
        hola
        {/* <div> {pizzas[2].img} </div> */}
        {/* <div> {pizzas[2].desc}</div> */}
      </Container>
    );
  }
  