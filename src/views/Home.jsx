// import fotopizza from '../assets/img/pizza-background2.jpg'
import fotopizza from '../assets/img/pizza.PNG'
import "../assets/css/home.css"

export default function Home() {
    return (
      <div className='pizza-background'  style={{ backgroundImage: `url(${fotopizza})`,
      // backgroundRepeat: 'repeat',
      // backgroundsize: '70%',
      // height: '200px',
      // width: '400px'      
      }}>
      {/* <h1 className="text-center mt-4 mb-4">Pizzería Mamma Mia!</h1>
      <h2 className="text-center mt-4 mb-4">Tenemos las mejores pizzas que podreas encontrar!</h2> */}
    </div>
    );
  }
  