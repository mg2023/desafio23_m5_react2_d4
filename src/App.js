import Navbar from "./components/MyNavbar";
import { useEffect, useState } from "react";
import MyContext from "./my_context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Detalle from "./views/Detalle";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const endpoint = "/pizzas.json";

  const [pizzas, setPizzas] = useState([])
  const sharedState = { pizzas, setPizzas }

  const getPizzas = async () => {
    const response = await fetch(endpoint)
    let data = await response.json()
    setPizzas(data)
    console.log(data)
  }

  useEffect(() => {
    getPizzas()
  }, [])


  return (
    <div className="App">
      <MyContext.Provider value={sharedState}>
        <BrowserRouter>
          <Navbar />
          <Routes>      
            <Route path="/" element={<Home />} />
            <Route path="/detalle" element={<Detalle />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
