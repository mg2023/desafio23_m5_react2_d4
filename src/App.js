import { useEffect, useState } from "react";

function App() {
  const endpoint = "/pizzas.json";

  const [pizzas, setPizzas] = useState([])
  // const sharedState = { pizzas, setPizzas }

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
      hola
    </div>
  );
}

export default App;
