import Navbar from "./components/MyNavbar";
import { useEffect, useState } from "react";
import PizzasContext from "./contexts/PizzasContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const endpoint = "/pizzas.json";

  const [pizzas, setPizzas] = useState([])
  const sharedState = { pizzas, setPizzas }

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
      <PizzasContext.Provider value={sharedState}>
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
