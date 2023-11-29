import { Cart } from 'react-bootstrap-icons';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div>
      <a class="nav-link boton" href="#">
          <Cart /> 0
      </a>
    </div>
  )
}

export default CartWidget