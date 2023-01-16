import Navbar from "./components/MyNavbar";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import PizzasContext from "./contexts/PizzasContext";
// import DescrPizzaContext from "./contexts/DescrPizzaContext";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";


function App() {
  const endpoint = "/pizzas.json";

  const [pizzas, setPizzas] = useState([])
  const sharedPizzasContexState = { pizzas, setPizzas }

  // const [pizzaSeleccionada, setPizzaSeleccionada] = useState({
  //   "desc": " ",
  //   "id": " ",
  //   "img": "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
  //   "ingredients": ["mozzarella", "tomates", "jamón", "orégano"],
  //   "name": "napolitana",
  //   "price": 5950
  // })
  // const sharedDescrPizzaContexState = { pizzaSeleccionada, setPizzaSeleccionada }

  // console.log(pizzaSeleccionada)

  const getPizzas = async () => {
    const response = await fetch(endpoint)
    let data = await response.json()
    setPizzas(data)
    // console.log(data)
  }

  useEffect(() => {
    getPizzas()
  }, [])


  return (
    <div className="App">
      
      {/* <DescrPizzaContext.Provider value={sharedDescrPizzaContexState}> */}
      <PizzasContext.Provider value={sharedPizzasContexState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
        
      </PizzasContext.Provider>      
      {/* </DescrPizzaContext.Provider> */}
    </div>
  );
}

export default App;
