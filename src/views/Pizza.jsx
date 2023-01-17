import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// import PizzasContext from "../contexts/PizzasContext";
import CarritoContext from "../contexts/CarritoContext";

import "../assets/css/pizza.css"

import pizzas from "../data/pizzas.json"

export default function Pizza () {
  const { id } = useParams()
  // const { pizzas } = useContext(PizzasContext)
  const { setCarrito  } = useContext(CarritoContext)

  const pizza = pizzas.filter(pizza => pizza.id === id)

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

  return (
    <>
      {pizza.length > 0 ?
        <Container className="detalle-pizza">
          <div>
            <img className="img-pizza-seleccionada" src={pizza[0].img} alt="imagen de referencia pizza" />
          </div>
          <div className='info-pizza'>
            <div> {pizza[0].name}</div>
            <div> {pizza[0].desc}</div>
            <div> Ingredientes</div>
        
            <ul>
              {pizza[0].ingredients.map((ingredient, i) => (
                <li key={i}>🍕 {ingredient}</li>
              ))}
            </ul>
            <div>Precio: {pizza[0].price}</div>
            {/* <Button variant="danger" onClick={() => agregarAlCarrito(pizza.id, pizza.price)}>Añadir🛒</Button> */}
            <Button variant="danger" onClick={() => agregarAlCarrito(pizza[0].id, pizza[0].price, pizza[0].name, pizza[0].img)}>Añadir🛒</Button>
          </div>
        </Container>
        :
        <div>
        </div>
      }
    </>
  )
}



// export default function Pizza() {
//   let { id } = useParams();
//   const [pizzaSeleccionada, setPizzaSeleccionada] = useState({})
//   const { pizzas } = useContext(PizzasContext)
//   // const pizzaIndex = pizzas.findIndex((f) => f.id === id)

//   // useEffect(() => {
//   //   setPizzaSeleccionada(pizzas[pizzaIndex])
//   // }, [pizzas, pizzaIndex])

//   if (pizzaSeleccionada) {
//     return (
//       <Container className="detalle-pizza">
//         <div>
//           <img className="img-pizza-seleccionada" src={pizzaSeleccionada.img} alt="imagen de referencia pizza" />
//         </div>
//         <div className='info-pizza'>
//         <div> {pizzaSeleccionada.name}</div>
//         <div> {pizzaSeleccionada.desc}</div>
//         {console.log(pizzaSeleccionada)}
//         {/* <ul>
//           {pizzaSeleccionada.ingredients.map((ingredientes) => (
//             <li>🍕 {ingredientes}</li>
//           ))}
//         </ul> */}
//         <div> {pizzaSeleccionada.price}</div>
//         </div>
//       </Container>
//     )
//   }
//   else {
//     return (
//       <>
//       </>
//     )
//   }
// }
