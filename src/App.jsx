// Components
import { MainRouter } from './routers/MainRouter'
import { CartProvider } from "./context/CartContext";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {

  return (
    <div className='contenedor-principal'>
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </div>
  )
}

export default App
