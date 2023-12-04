import { Cart } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div>
      <Button variant="primary" href="##">
        <Cart className='icono'/> 0
      </Button>{'  '}
    </div>
  )
}

export default CartWidget