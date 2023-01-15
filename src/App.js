import Navbar from "./components/MyNavbar";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import PizzasContext from "./contexts/PizzasContext";
import DescrPizzaContext from "./contexts/DescrPizzaContext";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";


function App() {
  const endpoint = "/pizzas.json";

  const [pizzas, setPizzas] = useState([])
  const [pizzaSeleccionada, setPizzaSeleccionada] = useState([])
  const sharedPizzasContexState = { pizzas, setPizzas }
  const sharedDescrPizzaContexState = { pizzaSeleccionada, setPizzaSeleccionada }

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
      <PizzasContext.Provider value={sharedPizzasContexState}>
      <DescrPizzaContext.Provider value={sharedDescrPizzaContexState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
        </DescrPizzaContext.Provider>
      </PizzasContext.Provider>      
    </div>
  );
}

export default App;
