import Navbar from "./components/MyNavbar";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import PizzasContext from "./contexts/PizzasContext";
import CarritoContext from "./contexts/CarritoContext";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";
import Item from "./components/Item"


function App() {
  const endpoint = "/pizzas.json";

  const [pizzas, setPizzas] = useState([])
  const sharedPizzasContextState = { pizzas, setPizzas }

  const [carrito, setCarrito] = useState([])
  const sharedCarritoContextState = { carrito, setCarrito }

  const getPizzas = async () => {
    const response = await fetch(endpoint)
    let data = await response.json()
    setPizzas(data)
  }

  useEffect(() => {
    getPizzas()
  }, [])


  return (
    <div className="App">
      <PizzasContext.Provider value={sharedPizzasContextState}>
      <CarritoContext.Provider value={sharedCarritoContextState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>  
      </CarritoContext.Provider>        
      </PizzasContext.Provider>      
    </div>
  );
}

export default App;
