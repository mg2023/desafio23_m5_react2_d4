import Navbar from "./components/MyNavbar";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import PizzasContext from "./contexts/PizzasContext";
import CarritoContext from "./contexts/CarritoContext";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";

function App() {
  const endpoint = "/pizzas.json";

  const [pizzas, setPizzas] = useState([])
  const sharedPizzasContexState = { pizzas, setPizzas }

  const [carrito, setCarrito] = useState([])
  const sharedCarritoContexState = { carrito, setCarrito }

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
      
      <CarritoContext.Provider value={sharedCarritoContexState}>
      <PizzasContext.Provider value={sharedPizzasContexState}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/carrito" element={<Carrito pizzas={pizzas}/>} />
          </Routes>
        </Router>                
      </PizzasContext.Provider>  
      </CarritoContext.Provider>     
    </div>
  );
}

export default App;
