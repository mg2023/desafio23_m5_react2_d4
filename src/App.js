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
    </div>
  );
}

export default App;
